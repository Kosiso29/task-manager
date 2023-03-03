import PropTypes from "prop-types";

import TextInput from "../TextInput";
import Button from "../Button";

import './AddItemBlock.scss';

const AddItemBlock = ({ inputProps, addButtonProps, cancelButtonProps, ...props }) => {
    return (
        <div className='add-item-block' {...props}>
            <TextInput {...inputProps} />
            <div className='add-item-block-buttons'>
                <Button {...addButtonProps} />
                {cancelButtonProps ? <Button {...cancelButtonProps} /> : null}
            </div>
        </div>
    )
}

AddItemBlock.propTypes = {
    inputProps: PropTypes.object,
    buttonGroupProps: PropTypes.object,
    addButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object
}

AddItemBlock.defaultProps = {
    inputProps: {
        placeholder: 'Add new item'
    },
    addButtonProps: {
        variant: 'success',
        children: 'Add'
    },
    // cancelButtonProps: {
    //     variant: 'link',
    //     children: 'Cancel'
    // },
}

export default AddItemBlock;