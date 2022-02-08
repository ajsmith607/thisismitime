---
title: "mi kei"
menu: "main"
weight: 2 
mainid: "mikei"
summary: "the essential reference"
---

**Mitime** (pronounced "my time") is a minimal metastructure mapped over standard time that counts down available time in a day.

Mitime is represented by the following format:  

*M.H.N* 

Where:
- *M* is the **mi** ({{% mi %}}), a magic number that represents the largest subdivision of the day.
- *H* is the *mihour*. Like standard hours, mihours are 60 standard minutes in length, facilitating coordination with standard time. Mihours are numbered relative to their containing mi.
- *N* is the *miminute*. Miminutes are numbered relative to their containing mihour. 

Because mitime counts down, all numbers are reversed chronologically.

Standard time outside of mitime is unavailable time and is not tracked. This is represented as zero mitime:

*0.0.0*

*Mitimezones* describe the structure of mitime, and how mitime maps to standard time. Therefore, a completely explicit mitime reference includes its mitimezone in the following format starting with the basic mitime format already discussed above:

*M.H.N {{% mi %}} MC.HC.NC.S* 

Where additionally:
- *MC* is the mi count, or the number of mis in a day.
- *HC* is the mihour count, the number of mihours in a mi.
- *NC* is the miminute count, the number of miminutes in a mihour.
- *S* is the *mistart*, the standard hour of the day when mitime begins. Mistart is based on a 24 hour clock, like hours in military time.  

The mitimezone **4.4.4.6** is the default reference mitimezone used throughout and is called *Standard Mitime*, abbreviated *SM*. Standard Mitime is the most generalized structure and reflects a number of existing cultural expectations about the structure of time, such as 16 waking hours and the tendency to divide time by quarters, along with the concept of the "business day." 

While Standard Mitime will fit many people, it is expected that people will configure their mitimezone to their unique needs. Mitimezones allow for cross-compatible variations over time, so experimentation is less expensive.

Because mitime counts down, the mitimezone mirrors the first unit of mitime in a day. The last unit of mitime before 0.0.0 is 1.1.1 for all mitimezones. 

Because mitime is compatible with standard time, standard time is always available as a fallback time specifier alongside mitime when higher precision is needed.


