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

> *M.H.N* 

Where:
- *M* is the **mi** ({{% mi %}}), a magic number that represents the largest subdivisions of the day. A half mi is, naturally, a **semi**.
- *H* is the *mihour*. Like standard hours, mihours are 60 standard minutes in length, facilitating coordination with standard time. Mihours are subdivided and numbered relative to their containing mi.
- *N* is the *miminute*. Miminutes are subdivided and numbered relative to their containing mihour. 

Because mitime counts down, all numbers are reversed chronologically.

Standard time outside of mitime is unavailable time and is not tracked. This is represented as zero mitime, also known as mi 0 ("my zero"):

> 0.0.0

Mi 0 represents daily recurring negative leap time within the structure of mitime.

*Mitimezones* describe the structure of mitime, and how mitime maps to standard time. Therefore, a completely explicit mitime reference will include its mitimezone in the following format starting with the basic mitime format already discussed above:

> *M.H.N {{% mi %}} MC.HC.NC.S* 

Where additionally:
- *MC* is the mi count, or the number of mis in a day.
- *HC* is the mihour count, the number of mihours in a mi.
- *NC* is the miminute count, the number of miminutes in a mihour.
- *S* is the *mistart*, the standard hour  when mitime begins. Mistart is based on a 24 hour clock, like hours in military time.  

The mitime range that begins at mistart and ends at mi 0 is called *midai* (pronounced "my day"). Notice that because mitime counts down, mitimezones mirror mitime at mistart, and the last unit of mitime before 0.0.0 is 1.1.1 for all mitimezones. 

The mitimezone **4.4.4.6** is the default reference mitimezone, called *Standard Mitime* and abbreviated *SM*. Standard Mitime is the most generalized structure and reflects a number of existing cultural expectations about the structure of time, such as 16 waking hours and the tendency to divide time by quarters, along with the concept of the "business day." 

In Standard Mitime, midai mistarts at 6am (4sm) and is 16 standard hours (and mihours) long, subdivided by 4 mi. In other words, the total available time in the productive day, 16 hours (after 8 hours of sleep at night), is divided into quarters, each 4 hours long, and each of those quarters is divided into quarters that are each an hour long. If needed, one can further divide each hour into quarters called miminutes, that are each 15 standard minutes in length. 

Because both mihours and standard hours are 60 standard minutes in length, translating between mitime and standard time quickly becomes intuitive. To start, realize that in Standard Mitime, the mid-point of midai reflects standard time:

> 2sm = 2pm

All other Standard mi boundaries fall on either 6's or 10's in standard time:

> 4sm = 6am
> 
> 3sm = 10am
> 
> 2sm = 2pm
> 
> 1sm = 6pm
> 
> 0sm = 10pm

Notice too that in Standard Mitime, at 8am (4.2sm), an eighth of the day–half of the first mi, a semi, two mihours–has passed in midai. Likewise at 8pm (1.2sm), an eighth of the day–half of the last mi, a semi, two mihours–remains in midai.

Instead of asking "what time is it?" one might instead ask "what is mitime?" At the midpoint of standard midai, one might respond with "2sm" which is short for 2.4.4sm in the same way that 2pm is short for 2:00pm. One might also give a more general answer, such as "I am in mi 2" ("my two"), which someone else might more traditionally call "mid-day".  

A *mitimer* displays Standard Mitime in the form of a traditional analog timer that counts down mitime, with **midials** that run counter-clockwise. The mitimer is read starting from the largest areas to the smallest, starting from the outside, moving inward.

{{< mitimer "1" "" "1" "" "12" "00" >}}

While Standard Mitime will meet the needs of many, anyone can configure their mitimezone to their unique needs. Mitimezones allow for cross-compatible variations over time, so experimentation is less expensive.

(Note too that because mistart can be any hour of the day, and the remaining structure is abstract, mitime can cross standard day boundaries.)

Whereas standard time progresses into the future, mitime's structure only counts down available time in midai. Knowing the standard time is good for keeping appointments, but mitime is better at providing an intuitive sense of where one is relative to the total available time in a day, and how much time is left in midai, which provides a natural structure for determining if one is on schedule or falling behind. 

And whereas standard time defines points in time, mitime's structure defines blocks of time. When used as a planning tool, the general, uniform structure of mitime optimizes interchangeability of blocks of time, so if needed, remaining mitime can be rearranged simply and with minimal disruption.

Finally, because mitime is compatible with standard time, standard time is always available as a fallback time specifier alongside mitime when higher precision is genuinely needed.


