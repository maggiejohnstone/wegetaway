import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            name: props.name,
            image: props.image,
            data: props.data,
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/listMenu")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                        error: null
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error,
                        items: []
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items, name, image, data} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (<div>
                    <span>{name}</span>
                    <span>image</span>
                    <span>{data}</span>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} {item.price} hello world
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Menu;