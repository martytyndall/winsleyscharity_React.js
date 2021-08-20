import Brand from './Brand'
import TopNav from './TopNav'

const Header = () => {
    return (
        <header className="App-header">
            <div className="container header">
                <div className="brand">
                    <Brand />
                </div>
                <div className="topnav">
                    <TopNav />
                </div>                                
            </div>
                       
      </header>
    );
}
 
export default Header;