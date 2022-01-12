import React from "react";

class CardData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, title: props.data.title, description: props.data.description, show: false};

        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick} className="card_data">
          {this.state.isToggleOn ? this.state.title : this.state.description}
        </button>
      );
    }
  }


class OpenCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = props.state;

      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
          title: this.state.title,
          show: !this.state.show,
          description: this.state.description,
          id: this.state.id
      })
    }
  
    render() {
      return (
            <div>
                <button onClick={this.handleClick} className="card">
                    {this.state.title}
                </button>

                <section style={{display: this.state.show ? "block" : "none"}}>
                    <CardData data={this.state} />
                </section>
            </div>
        );
    }
  }


function Card({item}) {
    return (
        <div >
            <OpenCard state={item} />
        </div>
    )
}

export default Card;