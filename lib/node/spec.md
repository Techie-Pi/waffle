# Library Spec
This document is a checklist with all the features a library is expected to have in order to fully implement Waffle
-aka ``domains.yaml``-

## Parsing capabilities
- [x] Support for parsing local files
- [x] Support for parsing remote files
  - [x] Support for hash check

## Data support
- [x] Version
  - [x] Version checking
- [ ] Domain set
  - [ ] Multiple domain sets support
- [x] Metadata
- [x] Domains
  - [x] Domain (host)
  - [x] Domain (host + wildcard)
  - [x] Type
  - [x] Ring

## High-level API
- [x] Check multiple rings and types
  - [x] Check if is deprecated
  - [x] Check if is disabled or removed
  - [x] Check if it is landing
  - [x] Check if it is a service
  - [x] Check if it is user content
  - [x] Check if it is a proxy

<sub>Version from _02-01-2022_<sub>
