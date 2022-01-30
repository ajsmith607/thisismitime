---
title: "mi guide"
menu: "main"
weight: 2 
mainid: "miguide"
summary: "the essential reference"
---

**Mitime** (pronounced "my time") is a minimal metastructure mapped over standard time that describes available time in a day. Because mitime describes available time, mitime counts down.

Mitime is represented by the following format:  

*M.H.N* 

Where:
- *M* is the **mi** ({{% mi %}}), the largest subdivision of the day.
- *H* is the *mihour*. Like standard hours, mihours are 60 standard minutes in length, facilitating coordination with standard time.
- *N* is the *miminute*.

Standard time outside of mitime is unavailable time and is not tracked. This is represented as zero mitime:

*0.0.0*

*Mitimezones* describe the structure of mitime, and how it maps to standard time. Therefore, a completely explicit mitime reference includes its mitimezone in the following format:

*M.H.N {{% mi %}} MC.HC.MC.S* 

Where:
- *MC* is the mi count, or the number of mis in a day.
- *HC* is the mihour count, the number of hours in a mi.
- *MC* is the miminute count, the number of miminutes in a mihour.
- *S* is the *mistart*, the standard hour of the day when mitime begins. Mistart is based on a 24 hour clock, like military time.  

The mitimezone **4.4.4.6** is the default reference mitimezone used throughout and is called *Standard Mitime*, abbreviated *SM*. Standard Mitime is the most generalized structure and reflects a number of existing cultural expectations about the structure of time, such as 16 waking hours and the tendency to divide time by quarters. 

Because mitime counts down, the mitimezone mirrors the first unit of mitime in a day. The last unit of mitime before zero mitime is always 1.1.1 . 
