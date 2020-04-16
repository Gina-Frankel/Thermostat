# Thermostat: business logic

[Back to the Challenge Map](README.md)

Alrighty. Now that you've got the basics under your fingers, it's time for a new domain.

In this challenge, you will build the logic needed to model a simple thermostat.

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

| thermostat       |
| ---------------- |
| attributes:      |
| temperature  
|power mode = 0n
(change it to off )       |
|                  |
| FUNCTIONS:       |
| up_temperature   |
| down_temperature |
| powermode_on     |
| powermode_off    |
|                  |


INPUT 

cons = MaxTempature 
var 



- on/off function for powermode 
- How would we get a variable with  the scope that we will be able to see it 
- 
- make a class attibute for power mode 
- default on 
- function to change  it to off 


Class cat (name)
attr _reader = :name 
@name = name 


kitty = Cat.new 

kitty.name 