import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import axios from "axios"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.State = {
            path: "",
            pattern: ""
        }
        this.handlePath = this.handlePath.bind(this)
        this.handlePattern = this.handlePattern.bind(this)
        this.Clickbtn= this.Clickbtn.bind(this)
    }


Clickbtn() {
   let {path,pattern} = this.state;
    axios.post("http://localhost:5000/api/search/searchFile", {
        path: path,
        pattern: pattern
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });}
handlePath(e) {
    this.setState({path: e.target.value})
}
handlePattern(e) {
    this.setState({pattern: e.target.value})
}

render() {
    return (
        <div>
            <div className="text">
                <label>Path</label>
                <input type="text" onChange={this.handlePath}></input>
            </div>
            <div className="text">
                <label>Pattern</label>
                <input type="text"onChange={this.handlePattern}></input>
            </div>
            <div>
                <button onClick={this.Clickbtn}>Search</button>
            </div>
        </div>

    )
}
}


var root = document.getElementById("root")
ReactDOM.render(<App />, root)