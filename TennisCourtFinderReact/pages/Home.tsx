import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function Home() {

    return (
      <div>
        <h2>Welcome to the</h2>
        <h1>Tennis Court Finder</h1>
        <Link to="/findacourt">
            <Button variant="primary">Find a Court</Button>
        </Link>
      </div>
  
      
    );
}