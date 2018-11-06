import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = state => ({ currentForm: state.currentForm });

const FormContainer = connect(
  mapStateToProps,
)(Form);

export default FormContainer;
