import React, { useRef, useEffect } from 'react';
import PieChart3D from './PieChart3D'; // Importing the JavaScript class



const PieChartPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const labels = ['Liquidity', 'Airdrop', 'Marketing & Development', 'CEX Integrations'];
    const data = [4000000000, 4000000000, 1500000000, 500000000];
    const colors = ['#6495ED', '#f2deff', '#40E0D0', '#FFBF00'];

    useEffect(() => {
        if (canvasRef.current) {
            const chart = new PieChart3D(canvasRef.current, data, labels, colors);
            chart.draw();
            chart.createLegend(0, 0);
        }
    }, [data, labels, colors]);

    return (
      <div className="position: relative;">
          
          <div>
              <canvas ref={canvasRef} id="myCanvas" width="400" height="400"></canvas>
          </div>
          <div id="legend" className=''></div>
      </div>
    );
};

export default PieChartPage;
