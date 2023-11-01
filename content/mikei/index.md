---
title: "mikei"
menu: "main"
weight: 2 
mainid: "mikei"
summary: "the essential reference"
subhead: "the essential reference"
---

**Mitime** (pronounced "my time") is a **mi**nimal **ti**me **me**tastructure mapped over standard time that counts down available time in a day.

Mitime is represented by the following format:  

*M.H.N* 

Where:
- *M* is the **mi** ({{% mi %}}), a magic number that represents the largest subdivisions of the day.
- *H* is the *mihour*. Like standard hours, mihours are 60 standard minutes in length, facilitating coordination with standard time. Mihours are subdivided and numbered relative to their containing mi.
- *N* is the *miminute*. Miminutes are subdivided and numbered relative to their containing mihour. 

Because mitime counts down, all numbers are reversed chronologically.

Standard time outside of mitime is unavailable time and is not tracked. This is represented as zero mitime:

*0.0.0*

Zero mitime can be thought of as daily recurring negative leap time within the structure of mitime.

*Mitimezones* describe the structure of mitime, and how mitime maps to standard time. Therefore, a completely explicit mitime reference will include its mitimezone in the following format starting with the basic mitime format already discussed above:

*M.H.N {{% mi %}} MC.HC.NC.S* 

Where additionally:
- *MC* is the mi count, or the number of mis in a day.
- *HC* is the mihour count, the number of mihours in a mi.
- *NC* is the miminute count, the number of miminutes in a mihour.
- *S* is the *mistart*, the standard hour  when mitime begins. Mistart is based on a 24 hour clock, like hours in military time.  

The range of available time that begins at mistart and ends at zero mitime is called *midai* (pronounced "my day"). Because mitime counts down, mitimezones mirror mitime at mistart, and the last unit of mitime before 0.0.0 is 1.1.1 for all mitimezones. 

The mitimezone **4.4.4.6** is the default reference mitimezone used throughout and is called *Standard Mitime*, abbreviated *SM*. Standard Mitime is the most generalized structure and reflects a number of existing cultural expectations about the structure of time, such as 16 waking hours and the tendency to divide time by quarters, along with the concept of the "business day." 

While Standard Mitime will fit many people, it is expected that people will configure their mitimezone to their unique needs. Note too that because mistart can be any hour of the day, and the remaining structure is abstract, mitime can cross standard day boundaries. Mitimezones allow for cross-compatible variations over time, so experimentation is less expensive.

Because mitime is compatible with standard time, standard time is always available as a fallback time specifier alongside mitime when higher precision is needed.


