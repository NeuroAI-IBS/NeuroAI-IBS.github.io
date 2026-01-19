+++
title = "Research"
description = "Our research projects and topics"
+++

Our group studies the biophysical basis of neural information processing through computational modeling, with particular emphasis on developing neuroscience-inspired machine learning/AI (neuroAI) models to analyze and model neuroscience data. We are big fans of physiological mechanisms and investigate how they collectively define the functions of neural systems underlying intelligent behavior in close collaboration with our experimental partner labs. Currently, our research projects focus on the cerebellar neural circuit and its adaptive computation. Here are some of our current projects:

### Circuit-level computation in the cerebellum for flexible movement control

{{< figure src="/images/research/manifold.png" alt="Neural manifold of the cerebellar Purkinje cell activity" width="60%" class="center" >}}

The cerebellum is a crucial brain region containing about 80% of all the neurons in the human brain and deeply involved in coordinating our movements. For example, even when we try to repeat an identical motion, individual parameters of movement, such as velocity and movement duration, naturally vary every time. However, those variations in individual parameters do not necessarily impair our movement precision since those variations can compensate for each other. Crucially, damage to the cerebellum often impairs this coordination.

In [our recent work](https://www.nature.com/articles/s41467-023-37981-0), we investigated the circuit-level underpinnings of this flexible movement control by analyzing the input and output activities of the cerebellar neural circuit by identifying their neural manifold structures. We found that the cerebellar neural circuit amplifies variabilities in the input and re-organizes them for emergent independent representations of movement parameters, which are essential for the flexible movement control.

We are currently investigating how the cellular and network mechanisms can give rise to this unique function of the cerebellar neural circuit underlying flexible movement control.

### Efficient construction of large-scale, physiologically realistic computational models of neural circuits

{{< figure src="/images/research/gc_network.png" alt="Cerebellar granular layer network" width="60%" class="center" >}}

Large-scale, physiologically detailed computational models of neural circuits are becoming increasingly essential for gaining integrative understanding of how neural systems operate. These models can be useful for integrating multi-modal neuroscience experimental datasets and help us gain algorithmic insights into how a variety of biological mechanisms work together to implement computational functions. These insights can help us design novel, efficient AI systems. However, constructing such models can demand significant time and effort due to massive biological complexity inherent in neural systems.

In our group, we are working on machine learning-based techniques to integrate biological details found in experimental data efficiently into large-scale, physiologically realistic computational models of neural circuits, with a particular focus on the cerebellar neural circuit (also see below).

### Neuro-glia interactions and their roles in computation and behavior

{{< figure src="/images/research/tonicGABA.png" alt="Maturation of tonic inhibition in the cerebellar cortex" width="70%" class="center" >}}

Recent studies have revealed that glial cells are not just passive support structures for neurons but play active roles in shaping neural circuit functions. In our group, we are particularly interested in the neuro-glia interactions — how glia modulate the activity of neurons by releasing neurotransmitters or modulators and how such glial functions are activated by neuronal activity. Our group is investigating how to incorporate neuro-glia interactions into neural circuit models for novel insights into the computational role of glial cells, which we are only beginning to understand. 

For example, in our [recent study](https://doi.org/10.1101/2024.05.30.596563), we investigated the source of tonic inhibition in the cerebellar granule cells shifting from synaptic spillover to tonic GABA released by the lamellar astrocytes during adolescence. By computational modeling, we found that this shift weakens synaptically mediated regulation of network activity while promoting independence in neuronal activity within the network. This network-level change explained animal movements shifting to a less stable but more flexible regime during maturation.

Since similar phenomena have been observed in a wide variety of neural systems, we plan to extend our modeling approach further to those systems to reveal the computational functions of the neuro-glia interactions in those systems.

---
**We have multiple open positions for researchers at various levels.** If you are interested in joining us, please check out the [Open Positions]({{< ref "opportunities" >}}) page.
