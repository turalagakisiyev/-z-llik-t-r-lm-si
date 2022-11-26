import React, { Component } from 'react'
import "./Wine.css"

class Wine extends Component {
    render() {
        let heart = '♥️'
        return (
            <>
                <div className="wine">
                    <div>
                        {this.props.title}
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                    <div>
                        {this.props.rating}
                    </div>
                    <div>
                        {this.props.like ? <div>{heart}</div> : null}
                    </div>

                </div>

            </>

        )
    }
}

export default Wine