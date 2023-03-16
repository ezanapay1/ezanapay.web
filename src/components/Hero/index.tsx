
import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: '#11284b',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(../../assets/hero.jpg)',
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 3)`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('md')]: {
			flexDirection: 'column',
		},
	},

	image: {
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			marginRight: 0,
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		maxWidth: rem(500),
		fontSize: rem(48),

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			fontSize: rem(34),
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: rem(500),

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
		},
	},

	control: {
		paddingLeft: rem(50),
		paddingRight: rem(50),
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(22),

		[theme.fn.smallerThan('md')]: {
			width: '100%',
		},
	},
}));

export function Hero() {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<Container size="lg">
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
              Your{' '}
							<Text
								component="span"
								inherit
								variant="gradient"
								gradient={{ from: 'green', to: 'lime' }}
							>
                Rent 
							</Text>{' '}
              Partner
						</Title>

						<Text className={classes.description} mt={30}>
              	EzanaPay helps you pay rent faster, flexibly and on time.
						</Text>

						<Button
							variant="gradient"
							gradient={{ from: 'pink', to: 'yellow' }}
							size="xl"
							className={`${classes.control} bg-primary/80 text-white px-4 py-2 font-semibold rounded-lg tracking-wide leading`}
							mt={40}
						>
              Get started
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

// import HeroImg from "../../assets/hero.jpg";

// const Hero = () => {
//   return (
//     <div className="h-[90vh] grid grid-cols-2 px-5">
//       {/* Left */}
//       <div className="flex items-start space-y-5 p-10 flex-col justify-center">
//         <h1 className="text-6xl font-bold w-72">Your Rent Partner</h1>
//         <p className="text-2xl font-light w-96">
//           EzanaPay helps you pay rent faster, flexibly and on time.
//         </p>
//         <button className="bg-primary/80 text-white px-4 py-2 font-semibold rounded-lg tracking-wide leading">
//           Get Started
//         </button>
//       </div>

//       {/* Right */}
//       <div className="items-center flex justify-center">
//         <div className="items-center flex justify-center rounded-full h-96 w-96">
//           <img
//             src={HeroImg}
//             alt="Woman with Keys"
//             style={{ objectFit: "cover" }}
//             className="relative h-full w-full rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
