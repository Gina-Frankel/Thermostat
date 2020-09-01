# Thermostat

In this challenge, you will build the logic needed to model a simple thermostat.

**Increase the temperature**
![](pictures/temp_up.gif)

**Decrease the temperature**
![](pictures/temp_down.gif)

**Find the weather in different cities**
![](pictures/weather_api.gif)

### Challenge setup

Specification:

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Class diagram

| Thermostat               |
| ------------------------ |
| **Attributes:**          |
| startTemperature: Number |
| powerSaveMode: Boolean   |
| temperature: Number      |
| usage: String            |
|                          |
| **Methods**:             |
| upTemperature()          |
| downTemperature()        |
| changePowerSaveMode()    |
| reset()                  |
| changeUsage()            |
| isMaximumTemperature()   |
| isMinimumTemperature()   |
