import DeepEarth from '../assets/mobile/image-deep-earth.jpg';
import NightArcade from '../assets/mobile/image-night-arcade.jpg';
import SoccerTeam from '../assets/mobile/image-soccer-team.jpg';
import TheGrid from '../assets/mobile/image-grid.jpg';
import FromUp from '../assets/mobile/image-from-above.jpg';
import PocketBorealis from '../assets/mobile/image-pocket-borealis.jpg';
import Curiosity from '../assets/mobile/image-curiosity.jpg';
import Fisheye from '../assets/mobile/image-fisheye.jpg';

import DeepEarthLg from '../assets/desktop/image-deep-earth.jpg';
import NightArcadeLg from '../assets/desktop/image-night-arcade.jpg';
import SoccerTeamLg from '../assets/desktop/image-soccer-team.jpg';
import TheGridLg from '../assets/desktop/image-grid.jpg';
import FromUpLg from '../assets/desktop/image-from-above.jpg';
import PocketBorealisLg from '../assets/desktop/image-pocket-borealis.jpg';
import CuriosityLg from '../assets/desktop/image-curiosity.jpg';
import FisheyeLg from '../assets/desktop/image-fisheye.jpg';

export const cardlist = [
	{
		id: 1,
		title: 'deep earth',
		imgUrl: DeepEarth,
		srcSetMedia: [
			{
				src: DeepEarthLg,
				media: '(min-width: 1024px)',
			},
			{
				src: DeepEarth,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 2,
		title: 'night arcade',
		imgUrl: NightArcade,
		srcSetMedia: [
			{
				src: NightArcadeLg,
				media: '(min-width: 1024px)',
			},
			{
				src: NightArcade,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 3,
		title: 'soccer team vr',
		imgUrl: SoccerTeam,
		srcSetMedia: [
			{
				src: SoccerTeamLg,
				media: '(min-width: 1024px)',
			},
			{
				src: SoccerTeam,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 4,
		title: 'the grid',
		imgUrl: TheGrid,
		srcSetMedia: [
			{
				src: TheGridLg,
				media: '(min-width: 1024px)',
			},
			{
				src: TheGrid,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 5,
		title: 'from up above vr',
		imgUrl: FromUp,
		srcSetMedia: [
			{
				src: FromUpLg,
				media: '(min-width: 1024px)',
			},
			{
				src: FromUp,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 6,
		title: 'pocket borealis',
		imgUrl: PocketBorealis,
		srcSetMedia: [
			{
				src: PocketBorealisLg,
				media: '(min-width: 1024px)',
			},
			{
				src: PocketBorealis,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 7,
		title: 'the curiosity',
		imgUrl: Curiosity,
		srcSetMedia: [
			{
				src: CuriosityLg,
				media: '(min-width: 1024px)',
			},
			{
				src: Curiosity,
				media: '(min-width: 300px)',
			},
		],
	},
	{
		id: 8,
		title: 'make it fisheye',
		imgUrl: Fisheye,
		srcSetMedia: [
			{
				src: FisheyeLg,
				media: '(min-width: 1024px)',
			},
			{
				src: Fisheye,
				media: '(min-width: 300px)',
			},
		],
	},
];
