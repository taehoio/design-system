import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import {
  Text,
  Div,
  Tag,
  Icon,
  Input,
  Image,
  Avatar,
  Button,
  Skeleton,
  Checkbox,
  Dropdown,
  Radio,
  ThemeProvider,
} from 'react-native-magnus';

const MagnusScreen = () => {
  const [radioValue1, setRadioValue1] = useState(null);
  const snackbarSuccessRef = React.createRef();
  const snackbarErrorRef = React.createRef();
  const snackbarInfoRef = React.createRef();
  const snackbarWarningRef = React.createRef();
  const dropdownRef = React.createRef();

  return (
    <ThemeProvider>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Div m="md">
          <Div flexDir="row" mt="sm">
            <Div h={40} w={40} mr="sm" bg="pink500" />
            <Div h={40} w={40} mr="sm" bg="green500" />
            <Div h={40} w={40} mr="sm" bg="teal500" />
            <Div h={40} w={40} mr="sm" bg="yellow500" />
            <Div h={40} w={40} mr="sm" bg="red500" />
            <Div h={40} w={40} mr="sm" bg="blue500" />
            <Div h={40} w={40} mr="sm" bg="gray500" />
          </Div>
          <Div flexDir="row" mt="sm">
            <Div h={40} w={40} mr="md" rounded="sm" shadow={1} />
            <Div h={40} w={40} mr="md" rounded="sm" shadow={2} />
            <Div h={40} w={40} mr="md" rounded="sm" shadow={3} />
            <Div h={40} w={40} mr="md" rounded="sm" shadow={4} />
            <Div h={40} w={40} mr="md" rounded="sm" shadow={5} />
            <Div h={40} w={40} mr="md" rounded="sm" shadow={6} />
          </Div>
          <Div flexDir="row" mt="sm">
            <Div h={40} w={40} mr="sm" borderColor="green500" borderWidth={1} />
            <Div
              h={40}
              w={40}
              mr="sm"
              borderColor="yellow500"
              borderWidth={1}
            />
            <Div h={40} w={40} mr="sm" borderColor="red500" borderWidth={1} />
            <Div h={40} w={40} mr="sm" borderColor="blue500" borderWidth={1} />
            <Div h={40} w={40} mr="sm" borderColor="gray500" borderWidth={1} />
          </Div>
          <Div flexDir="row" mt="sm">
            <Div h={40} w={40} bg="red400" flex={1} />
            <Div h={40} w={40} bg="yellow400" flex={2} />
            <Div h={40} w={40} bg="green400" flex={2} />
          </Div>
          <Div
            mt="sm"
            rounded="md"
            h={150}
            bgImg={{
              uri:
                'https://asiamountains.net/assets/lib/resized/174/363x204.jpg',
            }}
          />
          <Image
            mt="sm"
            rounded="md"
            h={150}
            source={{
              uri:
                'https://asiamountains.net/assets/lib/resized/174/363x204.jpg',
            }}
          />
          <Div flexDir="row" mt="sm">
            <Button mr="sm">Default</Button>
            <Button bg="green600" mr="sm" underlayColor="green700">
              Success
            </Button>
            <Button bg="yellow600" mr="sm" underlayColor="yellow700">
              Warning
            </Button>
            <Button bg="red600" mr="sm" underlayColor="red700">
              Danger
            </Button>
            <Button bg="teal600" mr="sm" underlayColor="teal700">
              Info
            </Button>
          </Div>
          <Div flexDir="row" mt="md">
            <Button
              bg="white"
              mr="sm"
              color="blue500"
              underlayColor="blue100"
              borderColor="blue500"
              borderWidth={1}>
              Success
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="yellow600"
              underlayColor="yellow100"
              borderColor="yellow600"
              borderWidth={1}>
              Warning
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="red500"
              underlayColor="red100"
              borderColor="red500"
              borderWidth={1}>
              Danger
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="teal600"
              underlayColor="teal100"
              borderColor="teal600"
              borderWidth={1}>
              Info
            </Button>
          </Div>
          <Div flexDir="row" mt="md" flexWrap="wrap">
            <Button rounded="sm" mr="sm">
              Small
            </Button>
            <Button rounded="md" mr="sm">
              Medium
            </Button>
            <Button rounded="lg" mr="sm">
              Large
            </Button>
            <Button rounded="xl" mr="sm">
              Lage
            </Button>
          </Div>
          <Div flexDir="row" mt="sm">
            <Button
              bg="white"
              h={40}
              w={40}
              rounded="circle"
              mr="sm"
              shadow={1}>
              <Icon name="heart" color="red500" />
            </Button>

            <Button bg="yellow500" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="star" color="white" />
            </Button>

            <Button bg="blue500" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="like1" color="white" />
            </Button>

            <Button bg="red500" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="codesquare" color="white" />
            </Button>

            <Button bg="green500" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="android1" color="white" />
            </Button>

            <Button bg="red100" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="heart" color="red500" />
            </Button>

            <Button bg="blue100" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="apple1" color="blue500" />
            </Button>

            <Button bg="green100" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="appstore1" color="green600" />
            </Button>

            <Button bg="yellow300" h={40} w={40} rounded="circle" mr="sm">
              <Icon name="slack" color="yellow700" />
            </Button>
          </Div>
          <Div flexDir="row" mt="sm">
            <Button
              px="xl"
              py="md"
              mr="md"
              bg="black"
              color="white"
              suffix={<Icon name="arrowright" ml="md" color="white" />}>
              Contact Us
            </Button>
            <Button
              px="xl"
              py="md"
              bg="blue500"
              rounded="circle"
              color="white"
              shadow={2}
              prefix={<Icon name="caretright" mr="md" color="white" />}>
              Play now
            </Button>
          </Div>
          <Div mt="sm">
            <Button px="xl" py="md" bg="blue500" block>
              Full width button
            </Button>
            <Button
              block
              prefix={
                <Icon position="absolute" left={8} name="user" color="white" />
              }
              bg="green600"
              p="md"
              mt="sm"
              color="white">
              Button with Left Icon
            </Button>
            <Button
              block
              suffix={
                <Icon position="absolute" right={8} name="user" color="white" />
              }
              bg="pink500"
              mt="sm"
              p="md"
              color="white">
              Button with Right Icon
            </Button>
          </Div>
          <Button mt="sm" p="md" bg="blue500" block loading loaderColor="white">
            Loading
          </Button>
          <Button
            mt="sm"
            p="md"
            bg="blue500"
            block
            disabled
            loaderColor="white">
            Disabled
          </Button>
          <Input placeholder="Email" mt="sm" bg="gray100" borderWidth={0} />
          <Input
            placeholder="Email"
            mt="sm"
            bg="blue100"
            color="gray800"
            borderWidth={0}
          />
          <Input
            placeholder="Email"
            mt="sm"
            loading
            bg="gray100"
            borderWidth={0}
          />
          <Input
            placeholder="Email"
            mt="sm"
            shadow={1}
            suffix={<Icon name="user" color="gray800" />}
          />
          <Input
            placeholder="Email"
            mt="sm"
            prefix={<Icon name="user" color="gray800" />}
          />
          <Checkbox defaultChecked>
            <Text ml="sm">Normal Checkbox</Text>
          </Checkbox>
          <Checkbox activeColor="green500" inactiveColor="green500">
            <Text ml="sm">Green Checkbox</Text>
          </Checkbox>
          <Checkbox disabled>
            <Text ml="sm">Disabled Checkbox</Text>
          </Checkbox>
          <Checkbox loading>
            <Text ml="sm">Loading state Checkbox</Text>
          </Checkbox>
          <Radio.Group
            value={radioValue1}
            onChange={value => setRadioValue1(value)}>
            <Radio value={1}>
              <Text ml="sm">Pikachu</Text>
            </Radio>
            <Radio value={2}>
              <Text ml="sm">Squirtle</Text>
            </Radio>
            <Radio value={3}>
              <Text ml="sm">Charmendar</Text>
            </Radio>
            <Radio value={4}>
              <Text ml="sm">Balbasaur</Text>
            </Radio>
          </Radio.Group>
          <Dropdown
            ref={dropdownRef}
            title="This is your title"
            mt="md"
            pb="xxl"
            showScrollIndicator={true}
            message="This is the long message used to set some context"
            roundedTop="xl"
            onSelect={value => {
              console.log(value);
              dropdownRef.current.close();
            }}>
            <Dropdown.Option value="1" py="md" px="xl">
              First Option
            </Dropdown.Option>
            <Dropdown.Option value="2" py="md" px="xl">
              Second Option
            </Dropdown.Option>
            <Dropdown.Option value="3" py="md" px="xl">
              Third Option
            </Dropdown.Option>
          </Dropdown>
          <Button
            block
            suffix={<Icon pos="absolute" right={8} name="user" color="white" />}
            bg="pink500"
            mt="sm"
            p="md"
            color="white"
            onPress={() => dropdownRef.current.open()}>
            Open Dropdown
          </Button>
          <Div flexDir="row" mt="md" flexWrap="wrap">
            <Button
              bg="green600"
              mr="sm"
              underlayColor="green700"
              onPress={() => {
                if (snackbarSuccessRef.current) {
                  snackbarSuccessRef.current.show();
                }
              }}>
              Success
            </Button>
            <Button
              bg="yellow500"
              mr="sm"
              underlayColor="yellow700"
              onPress={() => {
                if (snackbarWarningRef.current) {
                  snackbarWarningRef.current.show();
                }
              }}>
              Warning
            </Button>
            <Button
              bg="red600"
              mr="sm"
              underlayColor="red700"
              onPress={() => {
                if (snackbarErrorRef.current) {
                  snackbarErrorRef.current.show();
                }
              }}>
              Error
            </Button>
            <Button
              bg="blue500"
              mr="sm"
              underlayColor="info700"
              onPress={() => {
                if (snackbarInfoRef.current) {
                  snackbarInfoRef.current.show();
                }
              }}>
              Info
            </Button>
          </Div>
          <Div flexDir="row" alignItems="center" mt="md">
            <Avatar bg="red100" color="red700" mr="sm">
              A
            </Avatar>
            <Avatar bg="red100" size={32} color="red700" mr="sm">
              A
            </Avatar>
            <Avatar bg="red100" size={28} color="red700" mr="sm">
              A
            </Avatar>
            <Avatar bg="green700" mr="sm">
              <Icon name="user" color="white" fontFamily="Feather" />
            </Avatar>
            <Avatar bg="green700" rounded="lg" mr="sm">
              <Icon name="user" color="white" fontFamily="Feather" />
            </Avatar>
            <Avatar
              mr="sm"
              shadow={1}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
              }}
            />
          </Div>
          <Div flexDir="row" mt="md" flexWrap="wrap">
            <Tag>Tag</Tag>
            <Tag
              mt="md"
              mr="md"
              bg="blue100"
              borderColor="blue300"
              color="blue500"
              borderWidth={1}>
              Custom Tag 1
            </Tag>
            <Tag mt="md" mr="md" bg="blue700" color="white">
              Solid Tag
            </Tag>
          </Div>
          <Skeleton.Box mt="sm" />
          <Skeleton.Box mt="sm" />
          <Skeleton.Box mt="sm" />
          <Div flexDir="row" mt="md">
            <Skeleton.Circle h={40} w={40} />
            <Div ml="md" flex={1}>
              <Skeleton.Box mt="sm" />
              <Skeleton.Box mt="sm" w="80%" />
              <Skeleton.Box mt="sm" />
            </Div>
          </Div>
          <Div flexDir="row" mt="md">
            <Skeleton.Circle h={20} w={20} rounded="lg" />
            <Skeleton.Circle h={20} w={20} rounded="lg" ml="md" />
            <Div alignItems="flex-end" flex={1}>
              <Skeleton.Box h={20} w={100} />
            </Div>
          </Div>
        </Div>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    margin: 0,
  },
});

export default MagnusScreen;
