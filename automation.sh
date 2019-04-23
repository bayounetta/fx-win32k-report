#!/usr/bin/env bash

set -e

cd ../mozilla-central

hg checkout central

hg pull && hg update

hg rebase -b WIN32K -d central
hg checkout WIN32K

echo "building firefox"
./mach clobber
./mach build

# prefs
cp ../fx-win32k-report/patches/user.js ./obj-x86_64-pc-mingw32/tmp/profile-default/user.js

echo "running tests"
echo "01 mozilla.org"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/01-mozorg/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/mozilla-org-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/mozilla-org-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "02 svg rendering"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/02-svg/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/svg-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/svg-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "03 video playback"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/03-video/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/video-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/video-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "04 phaser rendering"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/04-phaser/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/phaser-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/phaser-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "05 webrtc connection"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/05-webrtc/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/webrtc-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/webrtc-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "06 printing"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/06-printing/ --keep-open=false --timeout=10800000

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/printing-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/printing-long-report.txt
rm ../win32k-stuff/win32k-log.txt

echo "07 test plugin"
# run mochitest under debugger
./mach mochitest --debugger="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe" --debugger-args="-c '\$\$<C:\Users\june\Source\win32k-stuff\initialize-win32k-tracing.txt'" win32k/tests/07-plugins/ --keep-open=false

# process report into short and long versions and then delete it
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt --xul-frames=6 > ../fx-win32k-report/logs/win32k/test-plugin-short-report.txt
python ../win32k-stuff/process-win32k-traces.py ../win32k-stuff/win32k-log.txt > ../fx-win32k-report/logs/win32k/test-plugin-long-report.txt
rm ../win32k-stuff/win32k-log.txt

cd ../fx-win32k-report

rm logs/win32k/full-short-report.txt
rm logs/win32k/full-long-report.txt

cat logs/win32k/mozilla-org-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/svg-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/video-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/phaser-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/webrtc-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/printing-short-report.txt >> logs/win32k/full-short-report.txt
cat logs/win32k/test-plugin-short-report.txt >> logs/win32k/full-short-report.txt

cat logs/win32k/mozilla-org-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/svg-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/video-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/phaser-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/webrtc-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/printing-long-report.txt >> logs/win32k/full-long-report.txt
cat logs/win32k/test-plugin-long-report.txt >> logs/win32k/full-long-report.txt

npm run clean
npm i
npm run build
# npm run deploy

echo "finshed report!"
