import Actions from "./Action";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet, tweet: { user } }) {
	return (
		<div className='tweet'>

      <ProfileImage src={user.image} />

			<div className='body'>
				<div className='top'>
					<User name={user.name} handle={user.handle} />
					
					<Timestamp timestamp={tweet.timestamp} />
				</div>

				<Message message= {tweet.message} />

				<Actions />
				
			</div>

			<i className='fas fa-ellipsis-h'></i>
		</div>
	);
}

export default Tweet;