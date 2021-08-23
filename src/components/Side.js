import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'

class Side extends Component{
    render(){
        return(
            <div className="Side-main">

                <div className="key">
                    <p className="keys">License Key</p>
                    <div className="license">
                    <h3>xxxx - xxxx - xxxx - xxxx</h3>
                    {Vectors.hide}
                    </div>
                    <div className="renew">
                        <div className="renew-now">
                            <p>Renew Now</p>
                            <span>{Vectors.stripelogo}</span>
                        </div>
                    <button>Deactive</button>
                    </div>
                    <p>Next Renewal on 22 Mar 2021</p>
                </div>

                <div className="discord">
                    <div className="tag">
                        <p><span className="dis">{Vectors.discord}</span> Discord ID</p>
                        <p>antony#2142</p>
                    </div>
                    <button>Unbind</button>
                </div>

                <div className="transfer">
                    <p className="tran"><span>{Vectors.transfer}</span>Transfer</p>
                    <div className="email">
                        <div className="email-info">
                        <p className="current">current email</p>
                        <p>anthony2142@gmail.com</p>
                        </div>
                        <button className="trans">Transfer to <span>{Vectors.right}</span></button>
                    </div>
                </div>

                <div className="download">
                    <div className="desktop">
                        <span>{Vectors.laptop}</span>
                        <p>Desktop App</p>
                    </div>
                    <div className="downloads">
                        <div className="mac">
                            <p><span>{Vectors.applelogo}</span> Download for MacOs</p>
                        </div>
                        <div className="windows">
                            <p><span>{Vectors.windows}</span> Download for Windows</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Side