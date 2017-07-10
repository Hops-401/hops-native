import { NativeModules } from 'react-native';
const client_id = process.env.SPOTIFY_CLIENT_ID; 
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; 
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; 

//Assign our module from NativeModules and assign it to a variable
const SpotifyAuth = NativeModules.SpotifyAuth;

class yourComponent extends Component {
	//Some code ...
	someMethod(){
    //You need this to Auth a user, without it you cant use any method!
		SpotifyAuth.setClientID(client_id, redirect_uri, ['streaming'], (error)=>{
        if(error){
          //handle error
        } else {
          //handle success
        }
      });
	}
}