import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TodoApp from '../List'
import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="content-jurnal" >
                <div className="jumbotron" >
                    <div className="col">
                        <h2 style={{fontFamily:'"Comic Sans MS", cursive, sans-serif'}}>Proprietarul jurnalului este {user.firstName}!</h2>  
                    </div>
                     <div className="col" >
                        <Link className="nav-link" to="/login">Logout</Link>
                    </div>
           
                </div>

                <  TodoApp />
            </div>
            
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
