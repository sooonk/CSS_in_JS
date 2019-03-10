import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Image from './image.js';
import PersonalData from './PersonalData';
import Content from './data.component.js';

  
const contactData = [
  {
    id: 2,
    linkedin: 'linkedin.com/Batman',
    mail: 'BATMAN@mail.com'
  
  }]

const experianceData = [
{
  id: 2,
  title: 'Experience 1'  ,

},
{
  id: 3,
  title: 'Experience 2'
}]

const education = [
  {
    id:1,
    school: 'School1'
  },
  {
    id:2,
    school: 'School2'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Header applicationName='App'/>

      <div>
      <Image />
      <PersonalData name='Jan Kowalski' job='Javascript Developer' />
      
      </div>
      <div>
        <Content title="Social" data={contactData}/>
      </div>
      <div>
        <Content title="Experience" data={experianceData}/>
      </div>
      <div>
        <Content school="Education" data={education}/>
      </div>
      <Footer applicationName='Author: Sonia' />
      </div>
    );
  }
}

export default App;
