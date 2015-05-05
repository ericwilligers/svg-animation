#! /usr/bin/python

# Generates a spinner comparable to that used by http://www.latimes.com/

import math

OUTER_RADIUS = 60
MIDDLE_RADIUS = 55
INNER_RADIUS = 10
OUTER_DIAMETER = OUTER_RADIUS * 2

def angle_path(angle):
  angle_radians = angle * math.pi / 180
  x = OUTER_RADIUS * (1 + math.cos(angle_radians))
  y = OUTER_RADIUS * (1 + math.sin(angle_radians))
  firstQuarters = 1
  if angle > 90:
    firstQuarters = 0
  return 'M%d %dL%d %dA%d %d 1 %d 1 %d 0z' % (OUTER_RADIUS, OUTER_RADIUS, x + 0.5, y + 0.5, OUTER_RADIUS, OUTER_RADIUS, firstQuarters, OUTER_RADIUS)

def printSpinner(id, animateTag, fill):
  path = ''
  for index in xrange(69):
    path += angle_path((index - 14) * 5) + ';'

  print '<svg width="%d" height="%d" xmlns="http://www.w3.org/2000/svg">' % (OUTER_DIAMETER, OUTER_DIAMETER)
  print '<circle cx="%d" cy="%d" r="%d" fill="black"/>' % (OUTER_RADIUS, OUTER_RADIUS, MIDDLE_RADIUS)
  print '<path id="%s" fill="red" d="%s">' % (id, angle_path(-70))
  print '<%s attributeType="XML" attributeName="d" dur="9s" fill="%s" values="%s"/>' % (animateTag, fill, path)
  print '</path>'
  print '<circle cx="%d" cy="%d" r="%d" fill="blue"/>' % (OUTER_RADIUS, OUTER_RADIUS, INNER_RADIUS)
  print '</svg>'

print """
<!DOCTYPE html>
<html>
  <body>
    <script src="../../web-animations.js"></script>
    <script src="../../smil-in-javascript.js"></script>
    <script src="../harness.js"></script>
    <script src="spinner-check.js"></script>
"""

printSpinner('polyfillLeft', 'animate', 'remove')
printSpinner('polyfillRight', 'animate', 'freeze')
printSpinner('nativeLeft', 'nativeAnimate', 'remove')
printSpinner('nativeRight', 'nativeAnimate', 'freeze')

print """
  </body>
</html>
"""
