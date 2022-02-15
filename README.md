This demonstrates an odd navigation bug brought on by @nativescript-community/ui-lottie

Test:

1. npm i
2. ns run android

You will see 2 navigation links. One will navigate you to a second page within the root frame, and the other in a content frame. Both work as expected.

3. ns install plugin @nativescript-community/ui-lottie

Try the links again. You will see the Nav in content frame doesn't work, and after Nav in the root frame, using the back button breaks the layout on the main page
