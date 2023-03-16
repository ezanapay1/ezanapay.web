import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';

import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

import Agreement from "../../assets/features/agreement.png";
import Bill from "../../assets/features/bill.png";
import Property from "../../assets/features/property.png";

const mockdata = [
  {
    title: 'Simple Property Listing',
    description:
      '',
    icon: Property,
  },
  {
    title: 'Automated Receipts and Invoices',
    description:
      '',
    icon: Bill,
  },
  {
    title: 'Payment Process and Reconciliation',
    description:
      '',
    icon: Property,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function Features() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <img src={feature.icon} alt="features" className="h-10 w-10" />
      {/* <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} /> */}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg" className='bg-primary'>
          The best software
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
         Manage your properties with ease
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We provide the best tech to help you manage your properties
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

// import React from "react";
//

// const features = [
//   {
//     id: 1,
//     title: "Simple Property Listing",
//     image: Property,
//   },
//   {
//     id: 2,
//     title: "Automated Receipts and Invoices",
//     image: Bill,
//   },
//   {
//     id: 3,
//     title: "Payment Process and Reconciliation",
//     image: Agreement,
//   },
// ];

// const Features = () => {
//   return (
//     <div className="p-20 flex justify-around">
//       {features.map((feature) => (
//         <div
//           className="flex flex-col items-center space-y-3 bg-primary/20 rounded-md p-5 hover:scale-150 transform ease-in-out duration-300"
//           key={feature.id}
//         >
//           <img src={feature.image} alt="features" className="h-10 w-10" />
//           <h1 className="w-48 font-bold text-lg text-center">
//             {feature.title}
//           </h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Features;
