# RaspberryPI/Odroid DHT22 GPIO reading

## Installation
`git clone https://github.com/hardkernel/wiringPi`
`cd wiringPi`
`make`
`sudo make install`

`gcc -o read-dht22 read-dht22.c -lwiringPi -pthread`
`sudo ./read-dht22 <pinNo>`     - default pin is 7
`chmod +x read_save_temp.sh`

Add the following to `sudo crontab -e` `/absolute/project/path/dht22/read_save_temp.sh`

## Output
Temperature&humidity readings will be saved in a file called 'temp' in this folder, with the following format:
- 2nd to last line: 'Humidity = XX.XX % Temperature = XX.XX \*C'
- last line timpestamp: 'YYYY-MM-DD HH:MM:SS'
```
usage: ./read-dht22 <pin>
description: pin is the wiringPi pin number
using 7 (GPIO 4)
Humidity = 55.20 % Temperature = 20.90 *C
2018-06-25 23:56:04
```
