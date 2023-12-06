// // Get a reference to the canvas object
// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// // this.data for the chart
// var data = [ 186270.8, 167703.6, 127742.5, 120061.5, 97643.61, 50295.33, 10342.42, 3180.5, 2452.21, 948.97, 423.55];
// var labels = [ 'ETH', 'SCS', 'USDC', 'USDT', 'BUSD', 'BNB', 'MATIC', 'AVAX', 'NEAR', 'XRP', 'SAMO'];
// var colors = [ '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff'];

// var data = [586117.8, 186270.8, 167703.6, 127742.5, 120061.5, 97643.61, 50295.33, 10342.42, 3180.5, 2452.21, 948.97, 423.55, 231.8];
// var labels = ['SOL', 'ETH', 'SCS', 'USDC', 'USDT', 'BUSD', 'BNB', 'MATIC', 'AVAX', 'NEAR', 'XRP', 'SAMO', 'BONK'];
// var colors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28'];
// var colors = [
//     '#6495ED',
//     '#778FD2',
//     '#40E0D0',
//     '#9FE2BF',
//     '#DE3163',
//     '#FF7F50',
//     '#FFBF00',
//     '#DFFF00',
//     '#A0C7E1',
//     '#fcdede',
//     '#80c0c0',
//     '#f2deff',
//     '#d4b693'
// ];



// var images = labels.map(function(label) {
//     var extension = (label === 'SAMO' || label === 'BONK') ? '.png' : '.svg';
//     return 'CRYPTO_LOGOS/' + label + extension;
// });




//-------------------------------------------------------------------------------------------------------


class PieChart3D {
    constructor(canvas, data, labels, colors, imageFolder = '/iconschart/') {
        if (!canvas) {
            throw new Error("Canvas element not provided.");
        }
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.data = data;
        this.labels = labels;
        this.colors = colors;
        this.imageFolder = imageFolder;

        if (this.data.length !== this.labels.length || this.labels.length !== this.colors.length) {
            throw new Error("Data, labels, and colors arrays should have the same length.");
        }

        // Initialization
        this.init();
    }

    init() {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;    
        this.radius = 200;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.depth = 60;
        this.tiltFactor = 0.5;
        
    }

    download(filename = 'screenshot.png') {
        const container = document.getElementById('piechartContainer');
    
        html2canvas(container).then((canvas) => {
            let link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = filename;
            link.click();
        });
    }

    // Function to convert an RGB color to HSL
    rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if(max == min){
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h, s, l];
    }

    // Function to convert an HSL color to RGB
    hslToRgb(h, s, l) {
        var r, g, b;
        if(s == 0){
            r = g = b = l;
        } else {
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    darkenColor(rgbColor) {
        var r = parseInt(rgbColor.slice(1, 3), 16);
        var g = parseInt(rgbColor.slice(3, 5), 16);
        var b = parseInt(rgbColor.slice(5, 7), 16);
        var hsl = this.rgbToHsl(r, g, b);
        hsl[2] *= 0.65;
        var rgb = this.hslToRgb(hsl[0], hsl[1], hsl[2]);
        var darkenedColor = "#" + rgb.map(function(value) {
            return ("0" + value.toString(16)).slice(-2);
        }).join("");
        return darkenedColor;
    }

    clipEntirePieChart() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX - this.radius, this.centerY / this.tiltFactor);
        this.ctx.arc(this.centerX, this.centerY / this.tiltFactor, this.radius, Math.PI, 2 * Math.PI, false);
        this.ctx.lineTo(this.centerX + this.radius, this.centerY + 3 * this.radius);
        this.ctx.lineTo(this.centerX - this.radius, this.centerY + 3 * this.radius);
        this.ctx.lineTo(this.centerX - this.radius, this.centerY / this.tiltFactor);
        this.ctx.closePath();
        this.ctx.clip();
    }

    setShadow(color, blur) {
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = blur;
        this.ctx.shadowOffsetX = 10;
        this.ctx.shadowOffsetY = 5;
    }

    // Function to draw the bottom of a slice
    drawBottom(startAngle, endAngle, color) {
        this.ctx.beginPath();
        this.ctx.ellipse(this.centerX, this.centerY + this.depth, this.radius, this.radius * this.tiltFactor, 0, startAngle, endAngle);
        this.ctx.fillStyle = this.darkenColor(color); // Match the bottom's color with the side's color
        this.ctx.fill();
    }


    draw() {
        // ... [All the drawing logic for the pie chart]
        // This includes loops for drawing bottoms, sides, tops, etc.
        var total = this.data.reduce(function(a, b) { return a + b; }, 0);
        
        this.setShadow( 'rgba(0, 0, 0, 0)', 5);

        // Draw the bottoms first
        var startAngle = -Math.PI / 2;
        for (var i = 0; i < this.data.length; i++) {
            var endAngle = startAngle + 2 * Math.PI * (this.data[i] / total);
            this.drawBottom(startAngle, endAngle, this.colors[i]);
            startAngle = endAngle;


        }

        this.setShadow( 'rgba(0, 0, 0, 0)', 0);

        // Draw the sides with the tilt effect

        var overlapFactor = 1.05;  // Slight overlap to avoid gaps
        var segmentCount = 10;  // Number of trapezoids to use for the side. You can adjust this.

        startAngle = -Math.PI / 2;

        // First loop for drawing the sides
        for (var i = 0; i < this.data.length; i++) {
            var endAngle = startAngle + 2 * Math.PI * (this.data[i] / total);
            
            this.ctx.beginPath();
            
            var startXTop = this.centerX + this.radius * Math.cos(startAngle);
            var startYTop = this.centerY + this.tiltFactor * this.radius * Math.sin(startAngle);
            var endXTop = this.centerX + this.radius * Math.cos(endAngle);
            var endYTop = this.centerY + this.tiltFactor * this.radius * Math.sin(endAngle);

            var startXBottom = this.startXTop;
            var startYBottom = this.startYTop + this.depth;
            var endXBottom = this.endXTop;
            var endYBottom = this.endYTop + this.depth;

            this.ctx.moveTo(startXTop, startYTop);

            // Left side of the slice using bezier curves
            this.ctx.bezierCurveTo(
                startXTop, startYTop + this.depth / 2,
                startXBottom, startYBottom - this.depth / 2,
                startXBottom, startYBottom
            );

            this.ctx.lineTo(endXBottom, endYBottom);

            // Right side of the slice using bezier curves
            this.ctx.bezierCurveTo(
                endXTop, endYTop + this.depth / 2,
                endXTop, endYTop,
                endXTop, endYTop
            );

            this.ctx.closePath();
            this.ctx.fillStyle = this.darkenColor(this.colors[i]);
            this.ctx.fill();

            startAngle = endAngle;

            
        }



        // Reset the starting angle for the trapezoids loop
        startAngle = -Math.PI / 2;
        var problematicAngle = 3.21239;

        // Second loop for drawing the trapezoids
        for (var i = 0; i < this.data.length; i++) {
            
            var endAngle = startAngle + 2 * Math.PI * (this.data[i] / total);
            var angleIncrement = (endAngle - startAngle) / segmentCount;

            // Logging the start and end angles and the color
            console.log(`Slice ${i} (Color: ${this.colors[i]})`);
            console.log(`Start Angle: ${startAngle} (in degrees: ${(startAngle + Math.PI / 2) * 180 / Math.PI})`);
            console.log(`End Angle: ${endAngle} (in degrees: ${(endAngle + Math.PI / 2) * 180 / Math.PI})`);
            console.log('--------------------------');

            for (var j = 0; j < segmentCount; j++) {
                var segmentStart = startAngle + j * angleIncrement;
                var segmentEnd = segmentStart + angleIncrement * overlapFactor;

                this.ctx.beginPath();

                if (segmentStart >= problematicAngle) {
                    continue;  // Skip drawing this trapezoid and move to the next one
                } else {
                    this.ctx.moveTo(this.centerX + this.radius * Math.cos(segmentStart), this.centerY + this.tiltFactor * this.radius * Math.sin(segmentStart));
                    this.ctx.lineTo(this.centerX + this.radius * Math.cos(segmentStart), this.centerY + this.depth + this.tiltFactor * this.radius * Math.sin(segmentStart));
                    this.ctx.lineTo(this.centerX + this.radius * Math.cos(segmentEnd), this.centerY + this.depth + this.tiltFactor * this.radius * Math.sin(segmentEnd));
                    this.ctx.lineTo(this.centerX + this.radius * Math.cos(segmentEnd), this.centerY + this.tiltFactor * this.radius * Math.sin(segmentEnd));
                }

                this.ctx.closePath();
                this.ctx.fillStyle = this.darkenColor(this.colors[i]);
                this.ctx.fill();
            }

            startAngle = endAngle;
        }



        // Draw all the tops next, with a more elliptical appearance
        this.ctx.save();  // Save the current context state
        this.ctx.scale(1, this.tiltFactor);  // Scale the y-axis for the ellipse effect


        // Now draw the shadow for the ENTIRE pie chart top within the clipping region
        this.setShadow( 'rgba(0, 0, 0, 0)', 0);
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY / this.tiltFactor, this.radius, -Math.PI / 2, 2.5 * Math.PI);
        this.ctx.lineTo(this.centerX, this.centerY / this.tiltFactor);
        this.ctx.closePath();
        this.ctx.fillStyle = this.colors[0]; // Temporary color to cast the shadow
        this.ctx.fill();

        this.clipEntirePieChart(this.ctx, this.centerX, this.centerY, this.radius, this.depth, this.tiltFactor);
        this.setShadow( 'rgba(0, 0, 0, 0.5)', 55);
        // Draw the individual pie slice tops WITHOUT shadows on top 
        //setShadow(this.ctx, 'rgba(0, 0, 0, 0.5)', 35);
        startAngle = -Math.PI / 2;
        for (var i = 0; i < this.data.length; i++) {
            var endAngle = startAngle + 2 * Math.PI * (this.data[i] / total);
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY / this.tiltFactor, this.radius, startAngle, endAngle);
            this.ctx.lineTo(this.centerX, this.centerY / this.tiltFactor);
            this.ctx.closePath();
            this.ctx.fillStyle = this.colors[i];
            this.ctx.fill();
            startAngle = endAngle;

        }

        this.ctx.restore();  // Restore the context to its original state

        this.setShadow( 'rgba(0, 0, 0, 0)', 0);
    }

    createLegend(x = 0, y = 0) {
        var total = this.data.reduce(function(a, b) { return a + b; }, 0);
        var images = this.labels.map((label) => {
            var extension = (label === 'SAMO' || label === 'BONK' || label == 'NANA') ? '.png' : '.png';
            return this.imageFolder + label + extension;
        });
        
        // Draw the legend
        var legendHTML = "<div style='position: absolute; top:" + y + "px; left:" + x + "px;'>";
        for (var i = 0; i < this.labels.length; i++) {
            var darkenedColor = this.darkenColor(this.colors[i]);
            legendHTML += `
            <div class='legend-container' style='display: flex; margin-top: 5px;'>
                <div class='legend-item' style='background: linear-gradient(145deg, ${darkenedColor}, ${this.colors[i]}); width:53px; margin-right:10px'>
                    <div style='display: flex; align-items: center;'>
                        <div class='percentage-box' style='background-color:SOME_COLOR'>
                            <span ><b>${(this.data[i] / total * 100).toFixed(2)}%</b></span>
                        </div>
                    </div>
                </div>
                <div class='legend-item' style='background: linear-gradient(145deg, ${darkenedColor}, ${this.colors[i]}); '>
                    <div style='display: flex; align-items: center;'>
                        <div class='color-box' style='background-color:${this.colors[i]}'></div>
                        <img src='${images[i]}' style='width:20px; height:20px; margin-right:5px;'>
                        <span style='color: white;'>${this.labels[i]}</span>
                    </div>
                </div>
            </div>`;
        }
        legendHTML += "</div>";
        document.getElementById('legend').innerHTML = legendHTML;
    }
}


export default PieChart3D;
