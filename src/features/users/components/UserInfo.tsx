import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
    Menu,
    ActionIcon,
    rem,
  } from '@mantine/core';
import { IconBookmark, IconLogout, IconTrash } from '@tabler/icons-react';
import { IconCalendar } from '@tabler/icons-react';
  import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: 'auto',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

    menuControl: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: 0,
        borderLeft: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
        }`,
      },
  }));
  
  interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
  }
  
  export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
    const { classes, theme } = useStyles();
    const menuIconColor = theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6];

    return (
      <UnstyledButton className={classes.user} {...others}>
        <Group>
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
            <Menu.Target>
                <ActionIcon
                    variant="filled"
                    className="bg-primary"
                    color={theme.primaryColor}
                    size={36}
                    // className={classes.menuControl}
                >
                    <IconChevronDown size="1rem" stroke={1.5} />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
            <Menu.Item icon={<IconLogout size="1rem" stroke={1.5} color={menuIconColor} />}>
                Logout
            </Menu.Item>
            </Menu.Dropdown>
         </Menu>
  
          {/* {icon || <IconChevronRight size="0.9rem" stroke={1.5} />} */}
        </Group>
      </UnstyledButton>
    );
  }