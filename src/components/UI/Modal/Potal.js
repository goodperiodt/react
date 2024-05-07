import ReactDOM from 'react-dom';

const Potal = ({ children: renderComponent, destId }) => {
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId),
  );
};

export default Potal;
