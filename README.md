# Animated React Native Progress Bar ⌛⏳✅

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)]()
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=for-the-badge&colorB=191A17)
[![Version](https://img.shields.io/npm/v/simple-react-native-progress-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/simple-react-native-progress-bar)
[![npm](https://img.shields.io/npm/dt/simple-react-native-progress-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/simple-react-native-progress-bar)

The smallest, most performant, animated progress bar for React Native apps 🚀

Silky smooth animations and complete styling flexibility 💄

Works with Expo and bare React Native apps.

Zero dependencies.

-   [Demos 📱](#demos-📱)
-   [Peer Dependencies 👶](#peer-dependencies-)
-   [Installation 🚀](#installation-)
-   [Examples 😎](#examples-)
    -   [Timer Picker Modal (Dark Mode) 🌚](#timer-picker-modal-dark-mode-)
    -   [Timer Picker Modal (Light Mode) 🌞](#timer-picker-modal-light-mode-)
    -   [Timer Picker with Customisation (Dark Mode) 🌒](#timer-picker-with-customisation-dark-mode-)
    -   [Timer Picker with Customisation (Light Mode) 🌔](#timer-picker-with-customisation-light-mode-)
-   [Props 💅](#props-)
    -   [TimerPicker ⏲️](#timerpicker-️)
        -   [Custom Styles 👗](#custom-styles-)
    -   [TimerPickerModal ⏰](#timerpickermodal-)
        -   [Custom Styles 👕](#custom-styles--1)
-   [Methods 🔄](#methods-)
    -   [TimerPicker](#timerpicker)
    -   [TimerPickerModal](#timerpickermodal)
-   [License 📝](#license-)

<br>

## Demos 📱

**Try it out for yourself on [Expo Snack](https://snack.expo.dev/@nuumi/simple-react-native-progress-bar-demo)!** Make sure to run it on a mobile to see it working properly.

<p>
    <img src="demos/example1.gif" width="250" height="550" style="margin-right:50px"/>
    <img src="demos/example2.gif" width="250" height="550"/>
</p>
<p>
    <img src="demos/example3.gif" width="250" height="550" style="margin-right:50px"/>
    <img src="demos/example4.gif" width="250" height="550"/>
</p>

<br>

## Peer Dependencies 👶

This component will work in your React Native Project **without any peer dependencies** 💃

<br>

## Installation 🚀

Supports React Native >= 0.59.0 and React >= 16.8.0.

Just run:

```bash
npm install simple-react-native-progress-bar
```

or

```bash
yarn add simple-react-native-progress-bar
```

<br>

## Examples 😎

### To-Do List ✅

```jsx
import { TimerPickerModal } from "simple-react-native-progress-bar";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`

....
const [showPicker, setShowPicker] = useState(false);
const [alarmString, setAlarmString] = useState<
        string | null
    >(null);

return (
    <View style={{backgroundColor: "#514242", alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 18, color: "#F1F1F1"}}>
            {alarmStringExample !== null
                ? "Alarm set for"
                : "No alarm set"}
        </Text>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{alignItems: "center"}}>
                {alarmString !== null ? (
                    <Text style={{color: "#F1F1F1", fontSize: 48}}>
                        {alarmString}
                    </Text>
                ) : null}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShowPicker(true)}>
                    <View style={{marginTop: 30}}>
                        <Text
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 18,
                                borderWidth: 1,
                                borderRadius: 10,
                                fontSize: 16,
                                overflow: "hidden",
                                borderColor: "#C2C2C2",
                                color: "#C2C2C2"
                                }}>
                            Set Alarm 🔔
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}
            onConfirm={(pickedDuration) => {
                setAlarmString(formatTime(pickedDuration));
                setShowPicker(false);
            }}
            modalTitle="Set Alarm"
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            LinearGradient={LinearGradient}
            styles={{
                theme: "dark",
            }}
            modalProps={{
                overlayOpacity: 0.2,
            }}
        />
    </View>
)

```

<img src="demos/example1.gif" width="250" height="550"/>

### Loading Bar ⏳

```jsx
import { TimerPickerModal } from "simple-react-native-progress-bar";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`

....
const [showPicker, setShowPicker] = useState(false);
const [alarmString, setAlarmString] = useState<
        string | null
    >(null);

return (
    <View style={{backgroundColor: "#F1F1F1", alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 18, color: "#202020"}}>
            {alarmStringExample !== null
                ? "Alarm set for"
                : "No alarm set"}
        </Text>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{alignItems: "center"}}>
                {alarmString !== null ? (
                    <Text style={{color: "#202020", fontSize: 48}}>
                        {alarmString}
                    </Text>
                ) : null}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShowPicker(true)}>
                    <View style={{marginTop: 30}}>
                        <Text
                            style={{paddingVertical: 10,
                            paddingHorizontal: 18,
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 16,
                            overflow: "hidden",
                            borderColor: "#8C8C8C",
                            color: "#8C8C8C"
                            }}>
                            Set Alarm 🔔
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}
            onConfirm={(pickedDuration) => {
                setAlarmString(formatTime(pickedDuration));
                setShowPicker(false);
            }}
            modalTitle="Set Alarm"
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            use12HourPicker
            LinearGradient={LinearGradient}
            styles={{
                theme: "light",
            }}
        />
    </View>
)

```

<img src="demos/example2.gif" width="250" height="550"/>

<br>

## Props 💅

|               Prop               | Description                                           |                                                                                              Type                                                                                               | Default | Required |
| :------------------------------: | :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: | :------: |
|         onDurationChange         | Callback when the duration changes                    |                                                            `(duration: { hours: number, minutes: number, seconds: number }) => void`                                                            |    -    |  false   |
|           initialHours           | Initial value for hours                               |                                                                                             Number                                                                                              |    -    |  false   |
|          initialMinutes          | Initial value for minutes                             |                                                                                             Number                                                                                              |    -    |  false   |
|          initialSeconds          | Initial value for seconds                             |                                                                                             Number                                                                                              |    -    |  false   |
|            hideHours             | Hide the hours picker                                 |                                                                                             Boolean                                                                                             |  false  |  false   |
|           hideMinutes            | Hide the minutes picker                               |                                                                                             Boolean                                                                                             |  false  |  false   |
|           hideSeconds            | Hide the seconds picker                               |                                                                                             Boolean                                                                                             |  false  |  false   |
|            hourLimit             | Limit on the hours it is possible to select           |                                                                                 { max?: Number, min?: Number }                                                                                  |    -    |  false   |
|           minuteLimit            | Limit on the minutes it is possible to select         |                                                                                 { max?: Number, min?: Number }                                                                                  |    -    |  false   |
|           secondLimit            | Limit on the seconds it is possible to select         |                                                                                 { max?: Number, min?: Number }                                                                                  |    -    |  false   |
|            hourLabel             | Label for the hours picker                            |                                                                                  String \| React.ReactElement                                                                                   |    h    |  false   |
|           minuteLabel            | Label for the minutes picker                          |                                                                                  String \| React.ReactElement                                                                                   |    m    |  false   |
|           secondLabel            | Label for the seconds picker                          |                                                                                  String \| React.ReactElement                                                                                   |    s    |  false   |
|          padWithNItems           | Number of items to pad the picker with on either side |                                                                                             Number                                                                                              |    1    |  false   |
|          aggressivelyGetLatestDuration           | Set to True to ask DurationScroll to aggressively update the latestDuration ref |                                                                                             Boolean                                                                                              |    false    |  false   |
|          allowFontScaling           | Allow font in the picker to scale with accessibility settings |                                                                                             Boolean                                                                                              |    false    |  false   |
|          use12HourPicker           | Switch the hour picker to 12-hour format with an AM / PM label |                                                                                             Boolean                                                                                              |    false    |  false   |
|          amLabel           | Set the AM label if using the 12-hour picker |                                                                                             String                                                                                              |    am    |  false   |
|          pmLabel           | Set the PM label if using the 12-hour picker |                                                                                             String                                                                                              |    pm    |  false   |
|      disableInfiniteScroll       | Disable the infinite scroll feature                   |                                                                                             Boolean                                                                                             |  false  |  false   |
|          LinearGradient          | Linear Gradient Component                             | [expo-linear-gradient](https://www.npmjs.com/package/expo-linear-gradient).LinearGradient or [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient).default |    -    |  false   |
|       pickerContainerProps       | Props for the picker container                        |                                                                               `React.ComponentProps<typeof View>`                                                                               |    -    |  false   |
|    pickerGradientOverlayProps    | Props for both gradient overlays                      |                                                                                 `Partial<LinearGradientProps>`                                                                                  |    -    |  false   |
|  topPickerGradientOverlayProps   | Props for the top gradient overlay                    |                                                                                 `Partial<LinearGradientProps>`                                                                                  |    -    |  false   |
| bottomPickerGradientOverlayProps | Props for the bottom gradient overlay                 |                                                                                 `Partial<LinearGradientProps>`                                                                                  |    -    |  false   |
|              styles              | Custom styles for the timer picker                    |                                                                           [CustomTimerPickerStyles](#custom-styles-)                                                                            |    -    |  false   |

#### Custom Styles 👗

The following custom styles can be supplied to re-style the component in any way. Various styles are applied by default - you can take a look at these [here](src/components/TimerPicker/TimerPicker.styles.ts).

|      Style Prop       | Description                                  |       Type        |
| :-------------------: | :------------------------------------------- | :---------------: |
|         theme         | Theme of the component                       | "light" \| "dark" |
|    backgroundColor    | Main background color                        |      string       |
|         text          | Base text style                              |     TextStyle     |
|    pickerContainer    | Main container for the picker                |     ViewStyle     |
| pickerLabelContainer  | Container for the picker's labels            |     ViewStyle     |
|      pickerLabel      | Style for the picker's labels                |     TextStyle     |
|      pickerAmPmContainer      | Style for the picker's labels                |     ViewStyle     |
|      pickerAmPmLabel      | Style for the picker's labels                |     TextStyle     |
|  pickerItemContainer  | Container for each number in the picker      |     ViewStyle     |
|      pickerItem       | Style for each individual picker number      |     TextStyle     |
|  disabledPickerItem   | Style for any numbers outside any set limits |     TextStyle     |
| pickerGradientOverlay | Style for the gradient overlay (fade out)    |     ViewStyle     |

<br>

## Contributing 🧑‍🤝‍🧑

Contributions to this project are more than welcome.

### Dev Setup

To get this project running locally:
1. Clone the Git repo.
2. Run `yarn setup` from the project root (this installs the dev dependencies and the example's additional dependencies)
3. Run `yarn start` to start the example in Expo Go.
4. Start adding cool stuff! Your changes should be immediately reflected in the Expo Go app.

### GitHub Guidelines

There are two permenant branches: `main` and `develop`. You should never work directly on either of these branches.

1. Create a new branch off `develop` for your work using the pattern `feature/{DESCRIPTION}`.
2. When you think your work is ready for review, submit a PR from your branch back to `develop`.
3. Once the PR is resolved, your work will be merged into `develop`, and will be included in the next major/minor release.

<br>

## License 📝

This project is licensed under the [MIT License](LICENSE).
