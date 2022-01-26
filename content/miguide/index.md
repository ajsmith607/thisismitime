---
title: "mi guide"
menu: "main"
weight: 2 
mainid: "miguide"
---

**Mitime** (pronounced "my time") is a minimal structure mapped over standard time that describes available time in a day.

Mitime is represented by the following format:  

*M.H.N* 

Where:
- *M* is the **mi** ({{% mi %}}), the most important number in mitime, defining the largest subdivision of the day. By default this is 4. 
- *H* is the *mihour*. Like standard hours, mihours are 60 standard minutes in length. By default, there are 4 mihours in every mi.
- *N* is the *miminute*. By default, there are 4 miminutes in every mihour. 

Because mitime describes available time, mitime counts down.

Standard time outside of mitime is unavailable time and is not tracked. This is represented as zero mitime:

*0.0.0*

*Mitimezones* describe the structure of mitime, and how it maps to standard time. Therefore, a completely explicit mitime reference includes its mitimezone in the following format:

*M.H.N {{% mi %}} MC.HC.MC.S* 

Where:
- *MC* is the mi count, or the number of mis in a day.
- *HC* is the mihour count, the number of hours in a mi.
- *MC* is the miminute count, the number of miminutes in a mihour.
- *S* is the *mistart*, the standard hour when mitime begins.

The mitimezone **4.4.4.6** is the default reference mitimezone used throughout and is called *Standard Mitime*, abbreviated *SM*. 

Because mitime is a countdown timer structured under the mi, the mitimezone mirrors the first unit of mitime in a day. The last unit of mitime before zero mitime is always 1.1.1 . 
