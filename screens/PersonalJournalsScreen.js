import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PersonalJournalsScreen = () => {
    const navigation = useNavigation();
    const [journals, setJournals] = useState([
        { id: '1', title: 'Journal 1', content: 'This is Jayden\'s Journal', category: 'Blogs', date: '12-07-2024' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedJournal, setEditedJournal] = useState({
        id: '',
        title: '',
        content: '',
        category: '',
        date: '',
    });

    const addJournal = () => {
        const newJournal = {
            id: Math.random().toString(),
            title: editedJournal.title,
            content: editedJournal.content,
            category: editedJournal.category,
            date: editedJournal.date,
        };
        setJournals([...journals, newJournal]);
        setModalVisible(false);
        setEditedJournal({
            id: '',
            title: '',
            content: '',
            category: '',
            date: '',
        });
    };

    const editJournal = () => {
        const updatedJournals = journals.map((journal) =>
            journal.id === editedJournal.id ? editedJournal : journal
        );
        setJournals(updatedJournals);
        setModalVisible(false);
        setEditMode(false);
    };

    const deleteJournal = () => {
        const updatedJournals = journals.filter((journal) => journal.id !== editedJournal.id);
        setJournals(updatedJournals);
        setModalVisible(false);
        setEditMode(false);
    };

    const openEditModal = (id, title, content, category, date) => {
        setEditedJournal({ id, title, content, category, date });
        setEditMode(true);
        setModalVisible(true);
    };

    const openAddModal = () => {
        setEditedJournal({
            id: '',
            title: '',
            content: '',
            category: '',
            date: '',
        });
        setEditMode(false);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personal Journals</Text>
            <FlatList
                data={journals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.journalItem}
                        onPress={() => openEditModal(item.id, item.title, item.content, item.category, item.date)}
                    >
                        <Text>{item.title}</Text>
                        <Text>{item.content}</Text>
                        <Text>{item.category}</Text>
                        <Text>{item.date}</Text>
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
                        value={editedJournal.title}
                        onChangeText={(text) => setEditedJournal({ ...editedJournal, title: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter content"
                        value={editedJournal.content}
                        onChangeText={(text) => setEditedJournal({ ...editedJournal, content: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter category"
                        value={editedJournal.category}
                        onChangeText={(text) => setEditedJournal({ ...editedJournal, category: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter date"
                        value={editedJournal.date}
                        onChangeText={(text) => setEditedJournal({ ...editedJournal, date: text })}
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
                                color="#ff6347"
                            />
                        )}
                        <Button
                            title="Cancel"
                            onPress={() => {
                                setModalVisible(false);
                                setEditMode(false);
                            }}
                            color="#808080"
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
        backgroundColor: '#f0f0f0',
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
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});

export default PersonalJournalsScreen;
