import React from 'react';
import './App.scss';

class App extends React.Component {
constructor(){
  super();
  this.state={
    posts:[],
    searchField:'',
    filterPosts:''
  }
}
componentDidMount(){
  fetch(' https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(users => this.setState( {posts : users}))
}
HandleChange=(e)=>{
this.setState ( {searchField: e.target.value})
}
handleSubmit=({FilteredPosts})=>{
this.setState({posts: FilteredPosts})
}

render(){

   const{searchField, posts}= this.state
   const FilteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchField.toLowerCase()))

   return(
    <div className='continer'>
      <div>
      
        
        <form className='form' >
        <input type="text" 
        value={this.state.searchField} 
        onChange={this.HandleChange}  
        placeholder='search post'
        />
          <div type='click' onClick={()=>this.setState({posts:FilteredPosts})} className='btn'>Search</div>
        </form>
      </div>
      <div>
      {
        this.state.posts.map(Post=>
        <div key={Post.id} className='post' >
          {Post.title}
        </div> )
      }
      </div>
    </div>

   )
}
}

export default App;
