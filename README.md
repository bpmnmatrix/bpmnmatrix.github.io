# BPMN Tool Matrix

This is a comparison matrix for BPMN tools. It lists 

* Name
* Creator
* Platform/Operating System
* BPMN Version
* First Release Date
* Latest Release Date
* Software License (free, proprietary, Shareware, Open Source)

The matrix is filterable by free or Open Source tools and by platform (Cross-Platform, Windows, Linux, Unix, Mac).

# Data

All data is managed in the [`data.json` file](data.json) and can be modified accordingly. Each entry has to follow this structure:

	{
        "Name": "Tool Name",
        "Version": "Tool Version",
        "URL": "Tool URL",
        "Creator": "Tool Creator",
        "Platform\/OS": "Short description of platform and/or operating systems",
        "OS": {
            "Cross-Platform": true|false,
            "Windows": true|false,
            "Mac": true|false,
            "Linux": true|false,
            "Unix": true|false
        },
        "BPMN Version": "BPMN Version",
        "First Release": "First Release Date (YYYY-MM-DD)",
        "Latest Release": "Latest Release Date (YYYY-MM-DD)",
        "License": {
            "free": true|false,
            "proprietary": true|false,
            "Shareware": true|false,
            "Open Source": true|false
        }
    }

# Contribute

If you want to contribute to this repository –especially to the [`data.json` file](data.json) in order to update outdated entries or to add new ones–, feel free to [Open an Issue](https://github.com/bpmnmatrix/bpmnmatrix.github.io/issues/new) or to [Create a Pull Request](https://github.com/bpmnmatrix/bpmnmatrix.github.io/compare/).

# License

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

[BPMN Tool Matrix by Moritz Hesse](https://bpmnmatrix.github.io/) is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

Based on a work at [http://en.wikipedia.org/wiki/Comparison_of_Business_Process_Modeling_Notation_tools](http://en.wikipedia.org/wiki/Comparison_of_Business_Process_Modeling_Notation_tools).
