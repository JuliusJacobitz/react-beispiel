import React from 'react'
import PostItem from './PostItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core'

/**
 * Beinhaltet alle PostItems und die Logik hinter diesen. Ermoeglicht eine Filterung nach Titel und Beschreibung der einzelnen PostItems
 * @see PostItem
 */
class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
        this.searchString = "";
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => this.setState({ items: res }))
    }
    /**
     * onChangeHandler - Aktualisiert den Klassenmember <code>searchString</code> bei Aenderung des Inhalts des Textfeldes
     */
    updateSearch = (e) => {
        this.searchString = e.target.value;
    }
    /**
     * Funktion, die abhaengig vom Inhalt des Klassenmembers <code>searchString</code> eine Filterung von Posts durchfuehrt
     */
    doSearch = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => {
            let filteredItems = res.filter(item => item.title.includes(this.searchString) || item.body.includes(this.searchString));
            this.setState({ items: filteredItems })
        })
    }

    render() {
        return (
            <div >
                <form>
                    <TextField fullWidth label="Suche" size="medium" margin="normal" onChange={this.updateSearch} />
                </form>

                <Button style={{
                    backgroundColor: 'deepskyblue',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: 15,
                    marginBottom: 15
                }} onClick={this.doSearch}>Search</Button>

                <Divider variant='fullWidth'></Divider>
                {
                    /**
                     * Erstellt fuer jedes Item in der Zustandsvariable <code>items</code> eine <code>PostItem</code>-Komponente, die einen Identifikationsschluessel, eine URL, einen Link zu einer Bilddatei, einen Titel sowie eine Beschreibung erhaelt
                     */
                    this.state.items.map(item => {
                        let img_src = 'https://source.unsplash.com/random?sig=' + Math.floor(Math.random() * 10000000);
                        return <PostItem
                            key={item.id}
                            url={'https://jsonplaceholder.typicode.com/posts/' + item.id}
                            img={img_src}
                            title={item.title}
                            description={item.body}>
                        </PostItem>
                    })
                }
            </div>
        );
    }
}

export default Posts;