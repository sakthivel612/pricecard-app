
import './App.css';

function App() {
  return (
    <div className='body-card'>
      <div className="App">
        <Free name="FREE"
        rupees="$0"
        month="/month"
        users="✔ Single User"
        storage="✔ 5GB Storage"
        Public_projects="✔ Unlimited Public Projects"
        community_Access="✔ Community Access"
        Private_projects="❌ Unlimited Private Projects"
        Phone_support="❌ Dedicated Phone Support"
        free_subdomain="❌ Free Subdomain"
        monthly_status_reporst="❌ Monthly Status Reports"
        />
      </div>
      <div className="App">
        <Plus name="PLUS"
        rupees="$9"
        month="/month"
        users="✔ 5 Users"
        storage="✔ 50GB Storage"
        Public_projects="✔ Unlimited Public Projects"
        community_Access="✔ Community Access"
        Private_projects="✔ Unlimited Private Projects"
        Phone_support="✔ Dedicated Phone Support"
        free_subdomain="✔ Free Subdomain"
        monthly_status_reporst="❌ Monthly Status Reports"
        />
      </div>
      <div className="App">
        <Pro name="PRO"
        rupees="$49"
        month="/month"
        users="✔ Unlimited Users"
        storage="✔ 150GB Storage"
        Public_projects="✔ Unlimited Public Projects"
        community_Access="✔ Community Access"
        Private_projects="✔ Unlimited Private Projects"
        Phone_support="✔ Dedicated Phone Support"
        free_subdomain="✔ Unlimited Free Subdomains"
        monthly_status_reporst="✔ Monthly Status Reports"
        />
      </div>
    </div>
    
  );
}

export default App;

function Free(props){
  return(
    <div className='free-card'>
      <h5>{props.name}</h5>
      <h1>{props.rupees}</h1><span>{props.month}</span>
      <hr></hr>
      <ul>
        <li>{props.users}</li>
        <li>{props.storage}</li>
        <li>{props.Public_projects}</li>
        <li>{props.community_Access}</li>
        <li className='not-use'>{props.Private_projects}</li>
        <li className='not-use'>{props.Phone_support}</li>
        <li className='not-use'>{props.free_subdomain}</li>
        <li className='not-use'>{props.monthly_status_reporst}</li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

function Plus(props){
  return(
    <div className='free-card'>
      <h5>{props.name}</h5>
      <h1>{props.rupees}</h1><span>{props.month}</span>
      <hr></hr>
      <ul>
        <li><b>{props.users}</b></li>
        <li>{props.storage}</li>
        <li>{props.Public_projects}</li>
        <li>{props.community_Access}</li>
        <li>{props.Private_projects}</li>
        <li>{props.Phone_support}</li>
        <li>{props.free_subdomain}</li>
        <li className='not-use'>{props.monthly_status_reporst}</li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

function Pro(props){
  return(
    <div className='free-card'>
      <h5>{props.name}</h5>
      <h1>{props.rupees}</h1><span>{props.month}</span>
      <hr></hr>
      <ul>
        <li><b>{props.users}</b></li>
        <li>{props.storage}</li>
        <li>{props.Public_projects}</li>
        <li>{props.community_Access}</li>
        <li>{props.Private_projects}</li>
        <li>{props.Phone_support}</li>
        <li><b>{props.free_subdomain}</b></li>
        <li>{props.monthly_status_reporst}</li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

