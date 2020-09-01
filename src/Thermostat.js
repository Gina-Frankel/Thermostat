"use strict";

const MAX_TEMPERATURE_PSM_ON = 25;
const MIN_TEMPERATURE = 10;
const MAX_TEMPERATURE_PSM_OFF = 32;
const LOW_USAGE_LIMIT = 18;
const HIGH_USAGE_LIMIT = 24;

function Thermostat() {
  this.powerSaveMode = true;
  this.startTemperature = 20;
  this.temperature = this.startTemperature;
  this.usage = "medium-usage";
}

Thermostat.prototype.changePowerSaveMode = function () {
  this.powerSaveMode
    ? (this.powerSaveMode = false)
    : (this.powerSaveMode = true);
  if (this.powerSaveMode == true) {
    this.temperature = 25;
  }
};

Thermostat.prototype.reset = function () {
  this.powerSaveMode = true;
  this.temperature = this.startTemperature;
};

Thermostat.prototype.changeUsage = function () {
  if (this.temperature < LOW_USAGE_LIMIT) {
    this.usage = "low-usage";
  } else if (this.temperature > HIGH_USAGE_LIMIT) {
    this.usage = "high-usage";
  } else {
    this.usage = "medium-usage";
  }
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (
    this.powerSaveMode === true &&
    this.temperature > MAX_TEMPERATURE_PSM_ON
  ) {
    return "MAX_TEMPERATURE_PSM_ON";
  }
  if (
    this.powerSaveMode === false &&
    this.temperature > MAX_TEMPERATURE_PSM_OFF
  ) {
    return "MAX_TEMPERATURE_PSM_OFF";
  }
};

Thermostat.prototype.isMinimumTemperature = function () {
  if (this.temperature < MIN_TEMPERATURE) {
    return true;
  }
};

Thermostat.prototype.upTemperature = function () {
  this.temperature = this.temperature += 1;
  if (this.isMaximumTemperature() === "MAX_TEMPERATURE_PSM_ON") {
    this.temperature = MAX_TEMPERATURE_PSM_ON;
  }
  if (this.isMaximumTemperature() === "MAX_TEMPERATURE_PSM_OFF") {
    this.temperature = MAX_TEMPERATURE_PSM_OFF;
  }
  this.changeUsage();
};

Thermostat.prototype.downTemperature = function () {
  this.temperature = this.temperature - 1;
  if (this.isMinimumTemperature() === true) {
    this.temperature = MIN_TEMPERATURE;
  }
  this.changeUsage();
};

Thermostat.prototype.showUsage = function () {
  return this.usage;
};
