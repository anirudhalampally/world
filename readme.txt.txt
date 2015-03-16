My 3-D world has a house, a on spot running zebra and dragon sitting on a mountain and a man

Anirudh Alampally-201202173





The run the code click on index.html (in mozilla Firefox)

Some external libraries have been used three.js for making the world, TrackballControl.js for detecting mouse click on screen.

Controls
a-move camera left
d-move camre right
w-move camera forward
s-move camera backward
i-move horse front
k-move horse backward
l-rotate horse left
j-rotate horse right
h-rotate horse clockwise
m-rotate horse anticlockwise
c-to change the camera views(three camera views have been added)


Different Camera views implemented
1 - Default View
2 - Overhead view
3 - side view

In each of the view you can change the camera position by moving the mouse whenever u want.
scroll for zoom in and zoom out on target, right click on screen and move to change target position of camera
left click and move to rotate camera about target position.

three different lights have been added, an ambient light, a point light source where the sun is located in the skybox.(a highlight due to the light can be seen on the plane if the camera is moved properly
and a directional light is added at position 1,1,1)

Two spheres are added in the world. These spheres rotate about their own axes and translate. These spheres are point light sources which emit purple light, shade can be seen on building

shadows appear on the back side of the horse 

lambert and phong material have been made for doing the shading techniques.

Shaders have been used briefly to paint the cuboid for the house.
the zebra and fleimgo are the animated objects 


Six sky scrapers are added.

A skybox have been added using texture which gives a look like sky.