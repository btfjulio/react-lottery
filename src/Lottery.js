import React, {Component} from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        name: "Lotto",
        numBalls: 8,
        maxNum: 40
      };
    constructor(props) {
        super(props)
        this.state = {
            balls: Array.from({ length: this.props.numBalls })
        }
        this.getNums = this.getNums.bind(this)
    }
    getNums() {
        this.setState(stt => ({
            balls: stt.balls.map(
                n => Math.floor((Math.random() * this.props.maxNum) + 1)
            )
        }))
    }
    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.name}</h1>
                <div className="Balls-container">
                    {this.state.balls.map(ball => {
                    return <Ball val={ball}/>
                    })}
                </div>
                <div>
                    <button onClick={this.getNums}>Get Nums</button>
                </div>
            </div>
        )
    }
}

export default Lottery