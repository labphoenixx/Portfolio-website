import React from 'react'
import './Portfolio.css'


const Portfolio = () => {

    const handleButtonClick = (url) => {
        window.location.href = url; // Redirects the browser to the specified URL
      };

    return (
    <div className='portContainer'>
        <h1>Portfolio</h1>

      <button 
      onClick={()=> handleButtonClick("https://www.linkedin.com/in/sdharshana/")}
      className='linkedIn'>My LinkedIn account</button>

      <button 
      onClick={()=> handleButtonClick("https://github.com/labphoenixx/")}
      className='github'>My GitHub Account</button>

      <button 
      onClick={()=> handleButtonClick("https://www.facebook.com/profile.php?id=61550614933518")}
      className='facebook'>My facebook account</button>

      <button
      onClick={()=> handleButtonClick("https://drive.google.com/file/d/1j9cEifFb4nLfr_kbuRo_CLPrRL5y_jlq/view?usp=sharing")}
      className='resume'
      >Link to my resume</button>
    </div>
  );
};

export default Portfolio;
