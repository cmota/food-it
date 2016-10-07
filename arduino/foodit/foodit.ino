
#define ROBOT_NAME "foodIt"
#define BLUETOOTH_SPEED 57600

// Variables will change:
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // previous state of the button

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup() {
  pinMode(2,INPUT);
  digitalWrite(2, LOW);
  pinMode(13,OUTPUT);
  digitalWrite(13, LOW);
  mySerial.begin(BLUETOOTH_SPEED);
  Serial.begin(9600);
  Serial.write("Setup done");
}

void loop() {

// read the pushbutton input pin:
  buttonState = digitalRead(2);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) {
      // if the current state is HIGH then the button
      // wend from off to on:
      Serial.println("on");
      digitalWrite(13, HIGH);
      mySerial.write("1");
      delay(100);
    } else {
      Serial.println("off");
      digitalWrite(13, LOW);
      mySerial.write("0");
      delay(100);
    }
  }
  // save the current state as the last state,
  //for next time through the loop
  lastButtonState = buttonState;

}

