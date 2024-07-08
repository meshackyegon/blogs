// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const PublicJounalsScreen = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Public Journal</Text>
//         </View>
//     );
// };

// export default PublicJounalsScreen;
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PublicJournalsScreen = () => {
    const navigation = useNavigation();
    const [journals, setJournals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedJournal, setEditedJournal] = useState('');
    const [selectedJournalId, setSelectedJournalId] = useState(null);
    useState(() => {
        setJournals([
            { id: '1', title: 'Journal 1', content: 'This is the content of Journal 1' },
            { id: '2', title: 'Journal 2', content: 'This is the content of Journal 2' },
        ]);
    }, []);

    const addJournal = () => {
        const newJournal = {
            id: Math.random().toString(),
            title: 'New Journal',
            content: 'Write your content here',
        };
        setJournals([...journals, newJournal]);
        setModalVisible(false);
    };

    const editJournal = () => {
        const updatedJournals = journals.map((journal) =>
            journal.id === selectedJournalId ? { ...journal, title: editedJournal } : journal
        );
        setJournals(updatedJournals);
        setModalVisible(false);
        setEditMode(false);
    };

    const deleteJournal = () => {
        const updatedJournals = journals.filter((journal) => journal.id !== selectedJournalId);
        setJournals(updatedJournals);
        setModalVisible(false);
    };

    const openEditModal = (id, title) => {
        setSelectedJournalId(id);
        setEditedJournal(title);
        setEditMode(true);
        setModalVisible(true);
    };

    const openAddModal = () => {
        setEditedJournal('');
        setEditMode(false);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Public Journals</Text>
            <FlatList
                data={journals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.journalItem}
                        onPress={() => openEditModal(item.id, item.title)}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter journal title"
                        value={editedJournal}
                        onChangeText={(text) => setEditedJournal(text)}
                    />
                    <View style={styles.modalButtons}>
                        <Button
                            title={editMode ? 'Edit Journal' : 'Add Journal'}
                            onPress={editMode ? editJournal : addJournal}
                        />
                        {editMode && (
                            <Button
                                title="Delete Journal"
                                onPress={deleteJournal}
                                color="#ff6347" // IndianRed
                            />
                        )}
                        <Button
                            title="Cancel"
                            onPress={() => setModalVisible(false)}
                            color="#808080" // Gray
                        />
                    </View>
                </View>
            </Modal>
            <Button
                title="Add Journal"
                onPress={openAddModal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    journalItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 10,
    },
});

export default PublicJournalsScreen;
