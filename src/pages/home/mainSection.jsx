import React from 'react';
import Fade from 'react-reveal/Fade';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import venom from '../../images/venom.jpg';

function MainSection() {
	return (
		<>
			<div
				className="main-sec"
				style={{
					background: ` linear-gradient( rgba(46,47,77, 0.2), rgba(46,47,77, 0.5)),url(${venom})  no-repeat `,
					backgroundSize: '100% 100%',
				}}
			>
				<Fade top>
					<div className="movie-info">
						<h1>Venom</h1>
						<p>2020</p>
						<p>movie</p>

						<div>
							<div className="add">
								<button className="play-button" type="submit">
									<BsPlayFill className="icon" />
								</button>

								<button type="submit">
									<IoIosAdd className="icon" />
								</button>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</>
	);
}

export default MainSection;
