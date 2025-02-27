# Day Phase App

A Bangle.js 2 app that shows the current time, date, and your position in the day using a color-coded progress bar. The app helps you stay aware of your daily schedule by visualizing different phases of your day.

## Features

- Digital time display
- Current date display
- Color-coded progress bar showing different phases of the day
- Visual indicator of current position within the day
- Automatic updates every minute
- Updates on screen wake

## Day Phases

The day is divided into the following phases:

- **Sleep** (00:00-07:00) - Dark Green
- **Morning Routine** (07:00-09:00) - Light Green
- **Focus** (09:00-12:00) - Light Blue
- **Break** (12:00-13:00) - Orange
- **Focus** (13:00-18:00) - Light Blue
- **Break** (18:00-20:00) - Orange
- **Wind Down** (20:00-21:00) - Light Red
- **Sleep Preparation** (21:00-22:00) - Red
- **Sleep** (22:00-00:00) - Dark Green

## Usage

The app will automatically start displaying the current time, date, and day phase progress bar. The progress bar shows:
- Past phases in full color
- Current phase with a progress indicator (arrow)
- Future phases with reduced opacity
- First letter of each phase above its section

The current phase name is displayed below the progress bar.

## Controls

- Touch screen to wake up display
- Use the back button to exit to launcher

## Installation

1. Go to the Bangle.js App Loader
2. Search for "Day Phase"
3. Click Install

## Requirements

- Bangle.js 2 watch
- Firmware version 2.11.13 or later recommended 