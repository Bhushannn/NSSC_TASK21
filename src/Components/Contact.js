import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container3 p-5">
                <div className="child3 shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-3">
                        <h2 className="fs-1.5">Connect with Doctor</h2>
                        <p className="cdoctor">Don't self medicate. 
                            Talk to an expert.
                             Consult a doctor in less than 2 minutes</p>
                             <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                    </div>
                    <div><img className="doctor" src="doctor.jpg"/></div>
                </div>

                <div className="child3 shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-3">
                        <h2 className="fs-1.5">Home Delivery in 30-min</h2>
                        <p className="cdoctor">Tired of waiting in queue? Too weak to go down and buy medicines?</p>
                             <button type="button" class="btn btn-primary btn-lg">Order Now</button>
                    </div>
                    <div><img className="doctor" src="delivery.png"/></div>
                </div>
                
            </div>
        </div>
    )
}
