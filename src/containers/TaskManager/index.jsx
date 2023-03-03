import { connect } from "react-redux";
import PropTypes from "prop-types";

import CreateUserBlock from "../../components/CreateUserBlock";
import CreateItemBlock from "../../components/CreateItemBlock";

import "./TaskManager.scss";

const TaskManager = (props) => {
    const { user } = props;
    return (
        <div className="task-manager">
            <CreateUserBlock />
            {user ? <>
                <CreateItemBlock taskType="tasksBefore" />
                <CreateItemBlock title="what I will do today / this week" />
                <CreateItemBlock
                    taskType="questions"
                    title="do you have roadblock? if you have questions or need help, please write your question or needs here" />
            </> : null }
        </div>
    );
}

TaskManager.propTypes = {
    now: PropTypes.number,
    label: PropTypes.string
}

TaskManager.defaultProps = {
    now: 50,
    label: '50%'
}

const mapStateToProps = state => {
    return {
        user: state.task.user
    }
}

export default connect(mapStateToProps)(TaskManager);
