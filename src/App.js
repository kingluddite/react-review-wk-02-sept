import Footer from './components/Footer';
import Header from './components/Header';

const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
}

const App = () => {
  return (
  <div className="container">
    <Header personObj={person} />

    <main>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dolore autem earum, illo praesentium, molestias possimus fuga, placeat non officiis provident amet. Aut dicta, temporibus sit tenetur obcaecati libero saepe!</p>
    </main>
    <Footer /> 
  </div>
  );
}

export default App;
