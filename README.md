<h1 align="center">
  [firefox win32k reports site](fx-win32k-report.github.io)
</h1>

Automated reporting for win32k usage in content processes served up every week!

To run locally just `npm run process && gatsby develop` then open localhost:8000

# processing notes for june
frames[0] is our nt call
frames[frames.length] is our lowest xul frame
