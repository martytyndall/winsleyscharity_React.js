import React from 'react'

const Footer = () => {

    function showCurrentYear() {
        const currentYear = new Date().getFullYear()
        return currentYear
    }

    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.755598192861!2d0.9156233823648662!3d51.87880379083363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9051cece3d735%3A0xfe5f4c05623e228c!2sWinsley%20Square%2C%20Colchester%20CO1%202AU!5e0!3m2!1sen!2suk!4v1629656062262!5m2!1sen!2suk"

    return (
        <footer className="App-footer footer">
                <div className="footer-container-top">
                    <div className="contact">
                        <h3>Contact details</h3>
                        <br />
                        <p>22 Winsley Square</p>
                        <p>Old Heath Road</p>
                        <p>Colchester</p>
                        <p>Essex</p>
                        <p>CO1 2AU</p>
                        <br />
                        <p>Tel: 01206 794064 / 07792950208</p>
                        <p>E: office@winsleyscharity.org.uk</p>
                    </div>

                    <div className="map">
                        <br />
                        <iframe title="map" src={location} width="350" height="262.50" border="0" allowFullScreen="0" loading="lazy"></iframe>
                    </div>               
                </div>

                <div className="footer-container-bottom">                    
                    <br />
                    <div className="copyright">
                        <p>Copyright &copy; <span id="year">{showCurrentYear()} </span>Winsley's Charity</p>
                    </div>
                    <br />
                    <div className="charity-number">
                        <p>Registered Charity Number 206000</p>
                    </div>
                </div>                       
        </footer>
    );



 

}



 
export default Footer;